module.exports = [
	{
		roles:'admin',
		allows:[{resources:['users'],permissions:['*']}]
	},
	{
		roles:'user',
		allows:[
			{resources:['self'],permissions:['view','edit','update','delete']}
		]
	}
]