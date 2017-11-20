process.env.NODE_ENV=='production'&& require('mock/mockOne.js');

var address = 'http://www.52mlsz.com/';

$(function(){
	$.ajax({
		url:address+'test',
		type:'post',
		success:function(data){
			console.log(data);
		},
		error:function(err){
			console.log(err);
		}
	})
})








