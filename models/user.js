var bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10,
    crypto = require('crypto'),
    validate = require('mongoose-validator').validate
var troop = require('mongoose-troop');

var Schema = new mongoose.Schema({
	name: {type:String,required:true,validate:[validate('len',1,50),validate('regex',/^[A-Za-z ]+$/)]},
	password: {type:String,required:true,validate:[validate('len',6,20)]},
	username: {type:String,required:true,unique:true,index:true,validate:[validate('len',6,20),validate('regex',/^[a-z A-Z][a-zA-Z0-9_\-]+[a-zA-Z0-9]+$/)]},
	email: {type:String,required:true,unique:true,index:true,validate:[validate('isEmail')]},
	country: String,
	birthdate: {type:Date,required:true},
	emailKey: String,
	active: {type:Boolean,default:false},
  createdAt:{type:Date,default:Date.now()
  }
});

//Encrypt password in the database
Schema.plugin(troop.timestamp);
Schema.pre('save',true,function(next,done){
	var self = this;
    if (!self.isModified('password')){
      next();
      return done();
    };

	bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
    if(err)
      next(err);
    else{
      bcrypt.hash(self.password,salt,function(err,hash){
        if(err)
          next(err)
        else{
          self.password = hash;
          next();
          done();
        }
      });
    }
  });
});

// Save emailKey for validation
Schema.pre('save',true,function(next,done){
  var self = this;
  if (!self.isModified('email') || !self.isModified('username')){
      next();
      return done();
    };

  var hash = crypto.createHash('md5').update(this.email + this.username ).digest("hex");
	this.emailKey = hash;
  next();
  done();
});

Schema.methods.compareHash = function(rpassword){
	return bcrypt.compareSync(rpassword,this.password);
};

module.exports = Schema;