'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
	function Person() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unknown Person';

		_classCallCheck(this, Person);

		this.name = name;
	}

	_createClass(Person, [{
		key: 'getGretting',
		value: function getGretting() {
			//		return "  Hello Mr. " + this.name;

			return 'Hi. I am ' + this.name;
		}
	}]);

	return Person;
}();

var me = new Person("Andrew");
console.log(me.getGretting());

var AboutMe = function () {
	function AboutMe(name, age) {
		_classCallCheck(this, AboutMe);

		this.name = name;
		this.age = age;
	}

	_createClass(AboutMe, [{
		key: 'getAge',
		value: function getAge() {
			return '' + (2018 - this.age);
		}
	}]);

	return AboutMe;
}();

var introduce = new AboutMe('Shafiq', 1986);
console.log("Hi, my name is " + introduce.name + " and I am at " + introduce.getAge());
