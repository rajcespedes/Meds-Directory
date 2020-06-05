const 	express = 	require('express'),
	 	router	=	express.Router();


var medico = [
	{
		name: 'Dr. Strange',
		image: 'https://depor.com/resizer/KW165wqT_TNaurSCPWeT2s6IrJA=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/AURMA6GSHRCLLJVGOYTEC77O5U.jpg',
		field: 'Sorcerer'
	},
	{
		name: 'Dr. Zhivago',
		image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTM1MjMzODI3NjA0ODI5NDU4/dr-zhivago-largejpg.jpg',
		field: 'Romantic'

	},
	{
		name: 'Dr. Doom',
		image: 'https://vignette.wikia.nocookie.net/marveldatabase/images/f/f9/Victor_von_Doom_%28Earth-616%29_from_Thor_Vol_1_600.jpg/revision/latest?cb=20130528050125',
		field: 'Villain'
	}

	];

router.get('/',function(req,res){
	res.render('index',{ medico: medico });
});


module.exports = router;