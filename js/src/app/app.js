/**
 * Copyright (c) 2014, Tobia De Koninck hey--at--ledfan.be
 * This file is licensed under the AGPL version 3 or later.
 * See the COPYING file.
 */
angular.module('chat', ['ngSanitize', 'bernhardposselt.enhancetext']);
angular.module('chat').config(['enhanceTextFilterProvider', '$httpProvider', function (enhanceTextFilterProvider, $httpProvider) {
	enhanceTextFilterProvider.setOptions({
		embeddedImagesHeight: '150px',
		smilies: {
			':+1:' : OC.imagePath('chat', '/emoji/+1.png'),
			':-1:' : OC.imagePath('chat', '/emoji/-1.png'),
			':alien:' : OC.imagePath('chat', '/emoji/alien.png'),
			':angry:' : OC.imagePath('chat', '/emoji/angry.png'),
			':anguished:' : OC.imagePath('chat', '/emoji/anguished.png'),
			':astonished:' : OC.imagePath('chat', '/emoji/astonished.png'),
			':blush:' : OC.imagePath('chat', '/emoji/blush.png'),
			':bowtie:' : OC.imagePath('chat', '/emoji/bowtie.png'),
			':clap:' : OC.imagePath('chat', '/emoji/clap.png'),
			':cold_sweat:' : OC.imagePath('chat', '/emoji/cold_sweat.png'),
			':confounded:' : OC.imagePath('chat', '/emoji/confounded.png'),
			':confused:' : OC.imagePath('chat', '/emoji/confused.png'),
			':cry:' : OC.imagePath('chat', '/emoji/cry.png'),

			':disappointed:' : OC.imagePath('chat', '/emoji/disappointed.png'),
			':disappointed_relieved:' : OC.imagePath('chat', '/emoji/disappointed_relieved.png'),
			':dizzy_face:' : OC.imagePath('chat', '/emoji/dizzy_face.png'),
			':expressionless:' : OC.imagePath('chat', '/emoji/expressionless.png'),
			':facepunch:' : OC.imagePath('chat', '/emoji/facepunch.png'),
			':fearful:' : OC.imagePath('chat', '/emoji/fearful.png'),
			':fist:' : OC.imagePath('chat', '/emoji/fist.png'),
			':flushed:' : OC.imagePath('chat', '/emoji/flushed.png'),
			':frowning:' : OC.imagePath('chat', '/emoji/frowning.png'),
			':grimacing:' : OC.imagePath('chat', '/emoji/grimacing.png'),
			':grin:' : OC.imagePath('chat', '/emoji/grin.png'),
			':grinning:' : OC.imagePath('chat', '/emoji/grinning.png'),
			':hand:' : OC.imagePath('chat', '/emoji/hand.png'),
			':heart_eyes:' : OC.imagePath('chat', '/emoji/heart_eyes.png'),
			':hushed:' : OC.imagePath('chat', '/emoji/hushed.png'),
			':imp:' : OC.imagePath('chat', '/emoji/imp.png'),
			':innocent:' : OC.imagePath('chat', '/emoji/innocent.png'),
			':joy:' : OC.imagePath('chat', '/emoji/joy.png'),
			':kissing:' : OC.imagePath('chat', '/emoji/kissing.png'),
			':kissing_closed_eyes:' : OC.imagePath('chat', '/emoji/kissing_closed_eyes.png'),
			':kissing_heart:' : OC.imagePath('chat', '/emoji/kissing_heart.png'),
			':kissing_smiling_eyes:' : OC.imagePath('chat', '/emoji/kissing_smiling_eyes.png'),
			':laughing:' : OC.imagePath('chat', '/emoji/laughing.png'),
			':mask:' : OC.imagePath('chat', '/emoji/mask.png'),
			':neckbeard:' : OC.imagePath('chat', '/emoji/neckbeard.png'),
			':neutral_face:' : OC.imagePath('chat', '/emoji/neutral_face.png'),
			':no_mouth:' : OC.imagePath('chat', '/emoji/no_mouth.png'),
			':ok_hand:' : OC.imagePath('chat', '/emoji/ok_hand.png'),
			':open_hands:' : OC.imagePath('chat', '/emoji/open_hands.png'),
			':open_mouth:' : OC.imagePath('chat', '/emoji/open_mouth.png'),
			':pensive:' : OC.imagePath('chat', '/emoji/pensive.png'),
			':persevere:' : OC.imagePath('chat', '/emoji/persevere.png'),
			':point_down:' : OC.imagePath('chat', '/emoji/point_down.png'),
			':point_left:' : OC.imagePath('chat', '/emoji/point_left.png'),
			':point_right:' : OC.imagePath('chat', '/emoji/point_right.png'),
			':point_up:' : OC.imagePath('chat', '/emoji/point_up.png'),
			':point_up_2:' : OC.imagePath('chat', '/emoji/point_up_2.png'),
			':pray:' : OC.imagePath('chat', '/emoji/pray.png'),
			':punch:' : OC.imagePath('chat', '/emoji/punch.png'),
			':rage:' : OC.imagePath('chat', '/emoji/rage.png'),
			':raised_hand:' : OC.imagePath('chat', '/emoji/raised_hand.png'),
			':raised_hands:' : OC.imagePath('chat', '/emoji/raised_hands.png'),
			':relaxed:' : OC.imagePath('chat', '/emoji/relaxed.png'),
			':relieved:' : OC.imagePath('chat', '/emoji/relieved.png'),
			':satisfied:' : OC.imagePath('chat', '/emoji/satisfied.png'),
			':scream:' : OC.imagePath('chat', '/emoji/scream.png'),
			':sleeping:' : OC.imagePath('chat', '/emoji/sleeping.png'),
			':sleepy:' : OC.imagePath('chat', '/emoji/sleepy.png'),
			':smile:' : OC.imagePath('chat', '/emoji/smile.png'),
			':smiley:' : OC.imagePath('chat', '/emoji/smiley.png'),
			':smiling_imp:' : OC.imagePath('chat', '/emoji/smiling_imp.png'),
			':smirk:' : OC.imagePath('chat', '/emoji/smirk.png'),
			':sob:' : OC.imagePath('chat', '/emoji/sob.png'),
			':stuck_out_tongue:' : OC.imagePath('chat', '/emoji/stuck_out_tongue.png'),
			':stuck_out_tongue_closed_eyes:' : OC.imagePath('chat', '/emoji/stuck_out_tongue_closed_eyes.png'),
			':stuck_out_tongue_winking_eye:' : OC.imagePath('chat', '/emoji/stuck_out_tongue_winking_eye.png'),
			':sunglasses:' : OC.imagePath('chat', '/emoji/sunglasses.png'),
			':sweat:' : OC.imagePath('chat', '/emoji/sweat.png'),
			':sweat_smile:' : OC.imagePath('chat', '/emoji/sweat_smile.png'),
			':thumbsdown:' : OC.imagePath('chat', '/emoji/thumbsdown.png'),
			':thumbsup:' : OC.imagePath('chat', '/emoji/thumbsup.png'),
			':tired_face:' : OC.imagePath('chat', '/emoji/tired_face.png'),
			':triumph:' : OC.imagePath('chat', '/emoji/triumph.png'),
			':unamused:' : OC.imagePath('chat', '/emoji/unamused.png'),
			':v:' : OC.imagePath('chat', '/emoji/v.png'),
			':wave:' : OC.imagePath('chat', '/emoji/wave.png'),
			':weary:' : OC.imagePath('chat', '/emoji/weary.png'),
			':wink:' : OC.imagePath('chat', '/emoji/wink.png'),
			':worried:' : OC.imagePath('chat', '/emoji/worried.png'),
			':yum:' : OC.imagePath('chat', '/emoji/yum.png'),
		}
	});
	$httpProvider.defaults.headers.common.requesttoken = oc_requesttoken;
}]);
function tran(id, vars){
	var text = 	$('#' + id).text();
	var _build = function (text, vars) {
		return text.replace(/{([^{}]*)}/g,
			function (a, b) {
				var r = vars[b];
				return typeof r === 'string' || typeof r === 'number' ? r : a;
			}
		);
	};
	return _build(text, vars);
}