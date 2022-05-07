(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
	});
}




var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}

function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$MiniMaker$Medium = {$: 'Medium'};
var $author$project$Types$GhostMember = F8(
	function (uuid, firstname, name, avatar_image, email, subscribed, paid, subscriptions) {
		return {avatar_image: avatar_image, email: email, firstname: firstname, name: name, paid: paid, subscribed: subscribed, subscriptions: subscriptions, uuid: uuid};
	});
var $author$project$Data$anonMember = A8($author$project$Types$GhostMember, 'f6bc137f-218b-42c7-8a6f-ae445103d96c', 'anon', 'test-user mike', '', 'anon@synthony.app', false, false, _List_Nil);
var $author$project$Configs$devMode = false;
var $author$project$Data$testMember = A8($author$project$Types$GhostMember, '263bb49a-a3e7-471e-a945-74570b25fd53', 'test-user', 'test-user mike', '', 'demo@mail.com', false, false, _List_Nil);
var $author$project$Configs$anonMember = $author$project$Configs$devMode ? $author$project$Data$testMember : $author$project$Data$anonMember;
var $author$project$Playback$Empty = {$: 'Empty'};
var $author$project$Playback$new = _Utils_Tuple2($elm$core$Maybe$Nothing, $author$project$Playback$Empty);
var $author$project$MiniMaker$initModel = {
	error: $elm$core$Maybe$Nothing,
	helpTexts: _List_Nil,
	member: $author$project$Configs$anonMember,
	pendingMember: $elm$core$Maybe$Nothing,
	pendingMemberError: $elm$core$Maybe$Nothing,
	pendingMemberSubmitted: $elm$core$Maybe$Nothing,
	playback: $author$project$Playback$new,
	showSample: $elm$core$Maybe$Nothing,
	speed: $author$project$MiniMaker$Medium,
	status: $elm$core$Maybe$Nothing,
	title: $elm$core$Maybe$Just(''),
	tracks: _List_Nil,
	voices: _List_Nil
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$MiniMaker$init = function (flags) {
	if (flags.$ === 'Nothing') {
		return _Utils_Tuple2(
			_Utils_update(
				$author$project$MiniMaker$initModel,
				{
					pendingMember: $elm$core$Maybe$Just(
						{email: '', name: '', trackIDs: _List_Nil})
				}),
			$elm$core$Platform$Cmd$none);
	} else {
		var member = flags.a;
		return _Utils_Tuple2(
			_Utils_update(
				$author$project$MiniMaker$initModel,
				{member: member}),
			$elm$core$Platform$Cmd$none);
	}
};
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Playback$Load = function (a) {
	return {$: 'Load', a: a};
};
var $author$project$Playback$Playing = {$: 'Playing'};
var $author$project$Configs$useLocal = false;
var $author$project$Configs$hostname = $author$project$Configs$useLocal ? 'http://localhost:3000' : ($author$project$Configs$devMode ? 'https://recordrecorder.com' : 'https://synthony.app');
var $elm$json$Json$Encode$int = _Json_wrap;
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $author$project$Encoders$ints = function (ids) {
	return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$int, ids);
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Ports$scrollTo = _Platform_outgoingPort('scrollTo', $elm$json$Json$Encode$string);
var $author$project$MiniMaker$scroll = function (id) {
	return $author$project$Ports$scrollTo(id);
};
var $author$project$Ports$setStorage = _Platform_outgoingPort(
	'setStorage',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$core$Basics$identity(b)
				]));
	});
var $author$project$PlaybackPorts$createAndPlaySource = _Platform_outgoingPort(
	'createAndPlaySource',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$json$Json$Encode$string(b)
				]));
	});
var $author$project$PlaybackPorts$createSource = _Platform_outgoingPort(
	'createSource',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$json$Json$Encode$string(b)
				]));
	});
var $author$project$PlaybackPorts$kill = _Platform_outgoingPort('kill', $elm$json$Json$Encode$int);
var $author$project$PlaybackPorts$pauseMusic = _Platform_outgoingPort('pauseMusic', $elm$json$Json$Encode$string);
var $author$project$PlaybackPorts$playMusic = _Platform_outgoingPort('playMusic', $elm$json$Json$Encode$string);
var $author$project$PlaybackPorts$setAndPlaySource = _Platform_outgoingPort(
	'setAndPlaySource',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$json$Json$Encode$string(b)
				]));
	});
var $author$project$PlaybackPorts$setSource = _Platform_outgoingPort(
	'setSource',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(a),
					$elm$json$Json$Encode$string(b)
				]));
	});
var $author$project$PlaybackPorts$stopMusic = _Platform_outgoingPort('stopMusic', $elm$json$Json$Encode$string);
var $author$project$Playback$trigger = function (msg) {
	switch (msg.$) {
		case 'Cue':
			var filepath = msg.a;
			return $author$project$PlaybackPorts$setSource(
				_Utils_Tuple2('#the-player', filepath));
		case 'Load':
			var filepath = msg.a;
			return $author$project$PlaybackPorts$setAndPlaySource(
				_Utils_Tuple2('#the-player', filepath));
		case 'Select':
			if (msg.a.$ === 'Nothing') {
				var _v1 = msg.a;
				return $author$project$PlaybackPorts$kill(0);
			} else {
				var track = msg.a.a;
				return $author$project$PlaybackPorts$createSource(
					_Utils_Tuple2('#the-player', track.filepath));
			}
		case 'Play':
			return $author$project$PlaybackPorts$playMusic('');
		case 'Pause':
			return $author$project$PlaybackPorts$pauseMusic('');
		case 'Stop':
			return $author$project$PlaybackPorts$stopMusic('');
		default:
			var _v2 = msg.a;
			var nodeId = _v2.a;
			var src = _v2.b;
			return $author$project$PlaybackPorts$createAndPlaySource(
				_Utils_Tuple2(nodeId, src));
	}
};
var $author$project$MiniMaker$RegisterUser = function (a) {
	return {$: 'RegisterUser', a: a};
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$not = _Basics_not;
var $author$project$Tools$findIndex = F2(
	function (x, xs) {
		var i = $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (j) {
					return !_Utils_eq(j, -1);
				},
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (j, a) {
							return _Utils_eq(x, a) ? j : (-1);
						}),
					xs)));
		if (i.$ === 'Nothing') {
			return -1;
		} else {
			var y = i.a;
			return y;
		}
	});
var $author$project$Tools$remove = F2(
	function (x, xs) {
		if (x.$ === 'Nothing') {
			return xs;
		} else {
			var jx = x.a;
			return A2(
				$elm$core$List$filter,
				function (a) {
					return !_Utils_eq(jx, a);
				},
				xs);
		}
	});
var $author$project$Tools$toggleElement = F2(
	function (x, xs) {
		var position = A2($author$project$Tools$findIndex, x, xs);
		return _Utils_eq(-1, position) ? A2($elm$core$List$cons, x, xs) : A2(
			$author$project$Tools$remove,
			$elm$core$Maybe$Just(x),
			xs);
	});
var $author$project$MiniMaker$updatePendingMember = F3(
	function (p, field, val) {
		return (field === 'name') ? _Utils_update(
			p,
			{name: val}) : ((field === 'email') ? _Utils_update(
			p,
			{email: val}) : {email: '', name: '', trackIDs: _List_Nil});
	});
var $author$project$MiniMaker$apply = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'UpdateName':
				var name = msg.a;
				var _v1 = model.pendingMember;
				if (_v1.$ === 'Nothing') {
					return _Utils_update(
						model,
						{
							pendingMember: $elm$core$Maybe$Just(
								{email: '', name: name, trackIDs: _List_Nil})
						});
				} else {
					var p = _v1.a;
					return _Utils_update(
						model,
						{
							pendingMember: $elm$core$Maybe$Just(
								A3($author$project$MiniMaker$updatePendingMember, p, 'name', name))
						});
				}
			case 'UpdateEmail':
				var email = msg.a;
				var _v2 = model.pendingMember;
				if (_v2.$ === 'Nothing') {
					return _Utils_update(
						model,
						{
							pendingMember: $elm$core$Maybe$Just(
								{email: email, name: '', trackIDs: _List_Nil})
						});
				} else {
					var p = _v2.a;
					return _Utils_update(
						model,
						{
							pendingMember: $elm$core$Maybe$Just(
								A3($author$project$MiniMaker$updatePendingMember, p, 'email', email))
						});
				}
			case 'PushedButton':
				if (!$elm$core$List$length(model.voices)) {
					return _Utils_update(
						model,
						{
							error: $elm$core$Maybe$Just('Click on a voice to add it to your song.')
						});
				} else {
					var _v3 = model.title;
					if (_v3.$ === 'Just') {
						if (_v3.a === '') {
							return _Utils_update(
								model,
								{
									error: $elm$core$Maybe$Just('Your song needs a name, can you give it one before we write it?')
								});
						} else {
							return _Utils_update(
								model,
								{error: $elm$core$Maybe$Nothing});
						}
					} else {
						return _Utils_update(
							model,
							{
								error: $elm$core$Maybe$Just('Your song needs a name, can you give it one before we write it?')
							});
					}
				}
			case 'SetTitle':
				var next = msg.a;
				return _Utils_update(
					model,
					{
						error: $elm$core$Maybe$Nothing,
						title: $elm$core$Maybe$Just(next)
					});
			case 'SetSpeed':
				var next = msg.a;
				return _Utils_update(
					model,
					{speed: next});
			case 'ToggleVoice':
				var voice = msg.a;
				return _Utils_update(
					model,
					{
						error: $elm$core$Maybe$Nothing,
						voices: A2($author$project$Tools$toggleElement, voice, model.voices)
					});
			case 'ToggleHelp':
				var voice = msg.a;
				return _Utils_update(
					model,
					{
						helpTexts: A2($author$project$Tools$toggleElement, voice, model.helpTexts)
					});
			default:
				return model;
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$file$File$Download$url = function (href) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$never,
		_File_downloadUrl(href));
};
var $author$project$Configs$download = function (url) {
	var target = ('http' === A2($elm$core$String$left, 4, url)) ? url : _Utils_ap($author$project$Configs$hostname, url);
	return $elm$file$File$Download$url(target);
};
var $elm$core$Debug$log = _Debug_log;
var $author$project$MiniMaker$RolledCombo = function (a) {
	return {$: 'RolledCombo', a: a};
};
var $elm$random$Random$Generate = function (a) {
	return {$: 'Generate', a: a};
};
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$random$Random$init = A2(
	$elm$core$Task$andThen,
	function (time) {
		return $elm$core$Task$succeed(
			$elm$random$Random$initialSeed(
				$elm$time$Time$posixToMillis(time)));
	},
	$elm$time$Time$now);
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return $elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a.a;
			var rest = commands.b;
			var _v1 = A2($elm$random$Random$step, generator, seed);
			var value = _v1.a;
			var newSeed = _v1.b;
			return A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2($elm$core$Platform$sendToApp, router, value));
		}
	});
var $elm$random$Random$onSelfMsg = F3(
	function (_v0, _v1, seed) {
		return $elm$core$Task$succeed(seed);
	});
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v1 = genA(seed0);
				var a = _v1.a;
				var seed1 = _v1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var $elm$random$Random$cmdMap = F2(
	function (func, _v0) {
		var generator = _v0.a;
		return $elm$random$Random$Generate(
			A2($elm$random$Random$map, func, generator));
	});
_Platform_effectManagers['Random'] = _Platform_createManager($elm$random$Random$init, $elm$random$Random$onEffects, $elm$random$Random$onSelfMsg, $elm$random$Random$cmdMap);
var $elm$random$Random$command = _Platform_leaf('Random');
var $elm$random$Random$generate = F2(
	function (tagger, generator) {
		return $elm$random$Random$command(
			$elm$random$Random$Generate(
				A2($elm$random$Random$map, tagger, generator)));
	});
var $elm$random$Random$map2 = F3(
	function (func, _v0, _v1) {
		var genA = _v0.a;
		var genB = _v1.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v2 = genA(seed0);
				var a = _v2.a;
				var seed1 = _v2.b;
				var _v3 = genB(seed1);
				var b = _v3.a;
				var seed2 = _v3.b;
				return _Utils_Tuple2(
					A2(func, a, b),
					seed2);
			});
	});
var $elm$random$Random$pair = F2(
	function (genA, genB) {
		return A3(
			$elm$random$Random$map2,
			F2(
				function (a, b) {
					return _Utils_Tuple2(a, b);
				}),
			genA,
			genB);
	});
var $author$project$Types$Structure = {$: 'Structure'};
var $author$project$Types$Voice = F7(
	function (id, duty, role, label, voice, density, complexity) {
		return {complexity: complexity, density: density, duty: duty, id: id, label: label, role: role, voice: voice};
	});
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $author$project$MiniMaker$rollTexture = A2($elm$random$Random$int, 1, 3);
var $author$project$Data$voiceIndex = function (role) {
	switch (role.$) {
		case 'Kick':
			return 1;
		case 'Bass':
			return 2;
		case 'Perc':
			return 3;
		case 'Chords':
			return 4;
		case 'Melody':
			return 5;
		default:
			return 6;
	}
};
var $author$project$MiniMaker$rollVoice = function (role) {
	return A3(
		$elm$random$Random$map2,
		A5(
			$author$project$Types$Voice,
			0,
			$author$project$Types$Structure,
			role,
			'label',
			$author$project$Data$voiceIndex(role)),
		$author$project$MiniMaker$rollTexture,
		$author$project$MiniMaker$rollTexture);
};
var $elm$random$Random$constant = function (value) {
	return $elm$random$Random$Generator(
		function (seed) {
			return _Utils_Tuple2(value, seed);
		});
};
var $elm_community$random_extra$Random$Extra$sequence = A2(
	$elm$core$List$foldr,
	$elm$random$Random$map2($elm$core$List$cons),
	$elm$random$Random$constant(_List_Nil));
var $author$project$MiniMaker$rollEnsemble = function (voices) {
	return $elm_community$random_extra$Random$Extra$sequence(
		A2($elm$core$List$map, $author$project$MiniMaker$rollVoice, voices));
};
var $author$project$Types$Scope = F6(
	function (id, label, cps, cpc, root, size) {
		return {cpc: cpc, cps: cps, id: id, label: label, root: root, size: size};
	});
var $elm$random$Random$map3 = F4(
	function (func, _v0, _v1, _v2) {
		var genA = _v0.a;
		var genB = _v1.a;
		var genC = _v2.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v3 = genA(seed0);
				var a = _v3.a;
				var seed1 = _v3.b;
				var _v4 = genB(seed1);
				var b = _v4.a;
				var seed2 = _v4.b;
				var _v5 = genC(seed2);
				var c = _v5.a;
				var seed3 = _v5.b;
				return _Utils_Tuple2(
					A3(func, a, b, c),
					seed3);
			});
	});
var $author$project$MiniMaker$rollCpc = A2($elm$random$Random$int, 3, 4);
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm$random$Random$float = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var seed1 = $elm$random$Random$next(seed0);
				var range = $elm$core$Basics$abs(b - a);
				var n1 = $elm$random$Random$peel(seed1);
				var n0 = $elm$random$Random$peel(seed0);
				var lo = (134217727 & n1) * 1.0;
				var hi = (67108863 & n0) * 1.0;
				var val = ((hi * 134217728.0) + lo) / 9007199254740992.0;
				var scaled = (val * range) + a;
				return _Utils_Tuple2(
					scaled,
					$elm$random$Random$next(seed1));
			});
	});
var $author$project$MiniMaker$rollCps = function (speed) {
	switch (speed.$) {
		case 'Slow':
			return A2($elm$random$Random$float, 0.8, 3);
		case 'Medium':
			return A2($elm$random$Random$float, 4, 8);
		default:
			return A2($elm$random$Random$float, 12, 18);
	}
};
var $author$project$MiniMaker$rollRoot = A2($elm$random$Random$int, 0, 11);
var $author$project$MiniMaker$rollScope = F2(
	function (title, speed) {
		var size = function () {
			switch (speed.$) {
				case 'Slow':
					return 2;
				case 'Medium':
					return 4;
				default:
					return 6;
			}
		}();
		var id = 0;
		return A4(
			$elm$random$Random$map3,
			F3(
				function (cps, root, cpc) {
					return A6($author$project$Types$Scope, id, title, cps, cpc, root, size);
				}),
			$author$project$MiniMaker$rollCps(speed),
			$author$project$MiniMaker$rollRoot,
			$author$project$MiniMaker$rollCpc);
	});
var $author$project$MiniMaker$rollCombo = F3(
	function (title, speed, roles) {
		return A2(
			$elm$random$Random$pair,
			A2($author$project$MiniMaker$rollScope, title, speed),
			$author$project$MiniMaker$rollEnsemble(roles));
	});
var $author$project$MiniMaker$modelToCombo = F3(
	function (title, speed, roles) {
		return A2(
			$elm$random$Random$generate,
			$author$project$MiniMaker$RolledCombo,
			A3($author$project$MiniMaker$rollCombo, title, speed, roles));
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$MiniMaker$pendingMemberErrMessage = function (_v0) {
	var name = _v0.name;
	var email = _v0.email;
	return ($elm$core$String$length(name) < 3) ? $elm$core$Maybe$Just('That name is too short, can you make it longer?') : ((!A2($elm$core$String$contains, '@', email)) ? $elm$core$Maybe$Just('We need an email address to log you in.') : (($elm$core$String$length(email) < 6) ? $elm$core$Maybe$Just('That email address is funky, can you fix it?') : $elm$core$Maybe$Nothing));
};
var $author$project$MiniMaker$Noop = function (a) {
	return {$: 'Noop', a: a};
};
var $elm$url$Url$Builder$toQueryPair = function (_v0) {
	var key = _v0.a;
	var value = _v0.b;
	return key + ('=' + value);
};
var $elm$url$Url$Builder$toQuery = function (parameters) {
	if (!parameters.b) {
		return '';
	} else {
		return '?' + A2(
			$elm$core$String$join,
			'&',
			A2($elm$core$List$map, $elm$url$Url$Builder$toQueryPair, parameters));
	}
};
var $elm$url$Url$Builder$crossOrigin = F3(
	function (prePath, pathSegments, parameters) {
		return prePath + ('/' + (A2($elm$core$String$join, '/', pathSegments) + $elm$url$Url$Builder$toQuery(parameters)));
	});
var $author$project$Configs$apiUrl = function (endpoint) {
	return A3(
		$elm$url$Url$Builder$crossOrigin,
		$author$project$Configs$hostname,
		_List_fromArray(
			[endpoint]),
		_List_Nil);
};
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectString = function (toMsg) {
	return A2(
		$elm$http$Http$expectStringResponse,
		toMsg,
		$elm$http$Http$resolve($elm$core$Result$Ok));
};
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{body: $elm$http$Http$emptyBody, expect: r.expect, headers: _List_Nil, method: 'GET', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $elm$core$String$append = _String_append;
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $author$project$Configs$leadUrl = 'user/interested';
var $elm$url$Url$Builder$relative = F2(
	function (pathSegments, parameters) {
		return _Utils_ap(
			A2($elm$core$String$join, '/', pathSegments),
			$elm$url$Url$Builder$toQuery(parameters));
	});
var $elm$url$Url$Builder$QueryParameter = F2(
	function (a, b) {
		return {$: 'QueryParameter', a: a, b: b};
	});
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $elm$url$Url$Builder$string = F2(
	function (key, value) {
		return A2(
			$elm$url$Url$Builder$QueryParameter,
			$elm$url$Url$percentEncode(key),
			$elm$url$Url$percentEncode(value));
	});
var $author$project$Encoders$queryReqLead = F4(
	function (email, name, trackIDs, requestSrc) {
		var ids = A3(
			$elm$core$List$foldl,
			$elm$core$String$append,
			'',
			A2(
				$elm$core$List$intersperse,
				',',
				A2($elm$core$List$map, $elm$core$String$fromInt, trackIDs)));
		return A2(
			$elm$url$Url$Builder$relative,
			_List_fromArray(
				[$author$project$Configs$leadUrl]),
			A3(
				$elm$core$List$map2,
				$elm$url$Url$Builder$string,
				_List_fromArray(
					['email', 'name', 'trackIDs', 'requestSrc']),
				_List_fromArray(
					[email, name, '[' + (ids + ']'), requestSrc])));
	});
var $author$project$MiniMaker$reqLead = function (_v0) {
	var email = _v0.email;
	var name = _v0.name;
	var trackIDs = _v0.trackIDs;
	return $elm$http$Http$get(
		{
			expect: $elm$http$Http$expectString($author$project$MiniMaker$Noop),
			url: $author$project$Configs$apiUrl(
				A4($author$project$Encoders$queryReqLead, email, name, trackIDs, 'minimaker'))
		});
};
var $author$project$MiniMaker$CompletedReg = function (a) {
	return {$: 'CompletedReg', a: a};
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$Encoders$encodeReqRegister = function (_v0) {
	var email = _v0.email;
	var name = _v0.name;
	var trackIDs = _v0.trackIDs;
	var requestSrc = _v0.requestSrc;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'email',
				$elm$json$Json$Encode$string(email)),
				_Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(name)),
				_Utils_Tuple2(
				'trackIDs',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$int, trackIDs)),
				_Utils_Tuple2(
				'requestSrc',
				$elm$json$Json$Encode$string(requestSrc))
			]));
};
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $elm$http$Http$post = function (r) {
	return $elm$http$Http$request(
		{body: r.body, expect: r.expect, headers: _List_Nil, method: 'POST', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$Configs$RegEntry = F4(
	function (email, name, trackIDs, requestSrc) {
		return {email: email, name: name, requestSrc: requestSrc, trackIDs: trackIDs};
	});
var $author$project$Configs$regData = F3(
	function (email, name, ids) {
		return A4($author$project$Configs$RegEntry, email, name, ids, 'minimaker');
	});
var $author$project$Configs$regUrl = 'members/api/send-magic-link/';
var $author$project$Configs$selfUrl = function (endpoint) {
	return $author$project$Configs$hostname + ('/' + endpoint);
};
var $author$project$MiniMaker$reqRegister = function (_v0) {
	var email = _v0.email;
	var name = _v0.name;
	var trackIDs = _v0.trackIDs;
	return $elm$http$Http$post(
		{
			body: $elm$http$Http$jsonBody(
				$author$project$Encoders$encodeReqRegister(
					A3($author$project$Configs$regData, email, name, trackIDs))),
			expect: $elm$http$Http$expectString($author$project$MiniMaker$CompletedReg),
			url: $author$project$Configs$selfUrl($author$project$Configs$regUrl)
		});
};
var $author$project$MiniMaker$GotTrack = function (a) {
	return {$: 'GotTrack', a: a};
};
var $author$project$Types$TrackMeta = F6(
	function (id, account_id, filepath, title, size_bytes, duration_seconds) {
		return {account_id: account_id, duration_seconds: duration_seconds, filepath: filepath, id: id, size_bytes: size_bytes, title: title};
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map6 = _Json_map6;
var $author$project$Decoders$decodeTrack = A7(
	$elm$json$Json$Decode$map6,
	$author$project$Types$TrackMeta,
	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'account_id', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'filepath', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'size_bytes', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'duration_seconds', $elm$json$Json$Decode$float));
var $author$project$Data$dutyString = function (duty) {
	if (duty.$ === 'Structure') {
		return 'structure';
	} else {
		return 'expression';
	}
};
var $author$project$Data$roleLabel = function (role) {
	switch (role.$) {
		case 'Kick':
			return _Utils_Tuple2('kick', 'Kick Drum');
		case 'Perc':
			return _Utils_Tuple2('perc', 'Percussion');
		case 'Hat':
			return _Utils_Tuple2('hat', 'Hats');
		case 'Bass':
			return _Utils_Tuple2('bass', 'Bassline');
		case 'Chords':
			return _Utils_Tuple2('chords', 'Chords');
		default:
			return _Utils_Tuple2('melody', 'Melody');
	}
};
var $author$project$Data$roleId = function (role) {
	return $author$project$Data$roleLabel(role).a;
};
var $author$project$Encoders$encodeVoice = function (_v0) {
	var duty = _v0.duty;
	var role = _v0.role;
	var label = _v0.label;
	var voice = _v0.voice;
	var density = _v0.density;
	var complexity = _v0.complexity;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'duty',
				$elm$json$Json$Encode$string(
					$author$project$Data$dutyString(duty))),
				_Utils_Tuple2(
				'role',
				$elm$json$Json$Encode$string(
					$author$project$Data$roleId(role))),
				_Utils_Tuple2(
				'label',
				$elm$json$Json$Encode$string(label)),
				_Utils_Tuple2(
				'voice',
				$elm$json$Json$Encode$int(voice)),
				_Utils_Tuple2(
				'density',
				$elm$json$Json$Encode$int(density)),
				_Utils_Tuple2(
				'complexity',
				$elm$json$Json$Encode$int(complexity))
			]));
};
var $author$project$Encoders$encodeEnsemble = $elm$json$Json$Encode$list($author$project$Encoders$encodeVoice);
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$Encoders$encodeScope = function (_v0) {
	var label = _v0.label;
	var cps = _v0.cps;
	var cpc = _v0.cpc;
	var root = _v0.root;
	var size = _v0.size;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'label',
				$elm$json$Json$Encode$string(label)),
				_Utils_Tuple2(
				'cps',
				$elm$json$Json$Encode$float(cps)),
				_Utils_Tuple2(
				'root',
				$elm$json$Json$Encode$float(root)),
				_Utils_Tuple2(
				'cpc',
				$elm$json$Json$Encode$int(cpc)),
				_Utils_Tuple2(
				'size',
				$elm$json$Json$Encode$int(size))
			]));
};
var $author$project$Encoders$encodeCombo = function (_v0) {
	var scope = _v0.a;
	var ensemble = _v0.b;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'scope',
				$author$project$Encoders$encodeScope(scope)),
				_Utils_Tuple2(
				'ensemble',
				$author$project$Encoders$encodeEnsemble(ensemble))
			]));
};
var $author$project$Encoders$encodeLayout = function (combos) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$string('ensemble')),
				_Utils_Tuple2(
				'combos',
				A2($elm$json$Json$Encode$list, $author$project$Encoders$encodeCombo, combos))
			]));
};
var $author$project$Encoders$encodeScoreMeta = function (_v0) {
	var title = _v0.title;
	var cps = _v0.cps;
	var root = _v0.root;
	var cpc = _v0.cpc;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$string(title)),
				_Utils_Tuple2(
				'cps',
				$elm$json$Json$Encode$float(cps)),
				_Utils_Tuple2(
				'root',
				$elm$json$Json$Encode$float(root)),
				_Utils_Tuple2(
				'cpc',
				$elm$json$Json$Encode$int(cpc))
			]));
};
var $author$project$Types$ScoreMeta = F4(
	function (title, cps, root, cpc) {
		return {cpc: cpc, cps: cps, root: root, title: title};
	});
var $author$project$MiniMaker$makeMeta = F2(
	function (title, scope) {
		return A4($author$project$Types$ScoreMeta, title, scope.cps, scope.root, scope.cpc);
	});
var $author$project$MiniMaker$encodeReqTrack = F4(
	function (email, uuid, title, combo) {
		var scope = combo.a;
		var ensemble = combo.b;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'meta',
					$author$project$Encoders$encodeScoreMeta(
						A2($author$project$MiniMaker$makeMeta, title, scope))),
					_Utils_Tuple2(
					'layout',
					$author$project$Encoders$encodeLayout(
						_List_fromArray(
							[combo]))),
					_Utils_Tuple2(
					'email',
					$elm$json$Json$Encode$string(email)),
					_Utils_Tuple2(
					'uuid',
					$elm$json$Json$Encode$string(uuid))
				]));
	});
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $author$project$MiniMaker$reqTrack = F4(
	function (email, uuid, title, combo) {
		return $elm$http$Http$post(
			{
				body: $elm$http$Http$jsonBody(
					A4($author$project$MiniMaker$encodeReqTrack, email, uuid, title, combo)),
				expect: A2($elm$http$Http$expectJson, $author$project$MiniMaker$GotTrack, $author$project$Decoders$decodeTrack),
				url: $author$project$Configs$apiUrl('track')
			});
	});
var $author$project$Playback$Paused = {$: 'Paused'};
var $author$project$Playback$Stopped = {$: 'Stopped'};
var $author$project$Playback$apply = F2(
	function (msg, p) {
		var track = p.a;
		var model = p.b;
		switch (msg.$) {
			case 'Play':
				return _Utils_Tuple2(track, $author$project$Playback$Playing);
			case 'Pause':
				return _Utils_Tuple2(track, $author$project$Playback$Paused);
			case 'Stop':
				return _Utils_Tuple2(track, $author$project$Playback$Stopped);
			case 'Cue':
				var src = msg.a;
				return _Utils_Tuple2(track, $author$project$Playback$Stopped);
			case 'Load':
				var src = msg.a;
				return _Utils_Tuple2(track, $author$project$Playback$Playing);
			case 'Select':
				if (msg.a.$ === 'Nothing') {
					var _v1 = msg.a;
					return $author$project$Playback$new;
				} else {
					var next = msg.a;
					return _Utils_Tuple2(next, $author$project$Playback$Stopped);
				}
			default:
				var _v2 = msg.a;
				var nodeId = _v2.a;
				var src = _v2.b;
				return _Utils_Tuple2(track, $author$project$Playback$Playing);
		}
	});
var $author$project$Playback$update = F2(
	function (msg, model) {
		return _Utils_Tuple2(
			A2($author$project$Playback$apply, msg, model),
			msg);
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$MiniMaker$update = F2(
	function (msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'CloseSample':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{showSample: $elm$core$Maybe$Nothing}),
						$author$project$MiniMaker$scroll('#voice-box'));
				case 'PlaySample':
					var role = msg.a;
					var _v1 = A2($elm$core$Debug$log, 'sample', model.showSample);
					if (_v1.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									showSample: $elm$core$Maybe$Just(role)
								}),
							$author$project$MiniMaker$scroll('#sample-box'));
					} else {
						var prev = _v1.a;
						return _Utils_eq(role, prev) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{showSample: $elm$core$Maybe$Nothing}),
							$author$project$MiniMaker$scroll('#voice-box')) : _Utils_Tuple2(
							_Utils_update(
								model,
								{
									showSample: $elm$core$Maybe$Just(role)
								}),
							$author$project$MiniMaker$scroll('#sample-box'));
					}
				case 'CompletedReg':
					var response = msg.a;
					if (response.$ === 'Ok') {
						var message = response.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									pendingMember: $elm$core$Maybe$Nothing,
									pendingMemberSubmitted: $elm$core$Maybe$Just('Amazing fam. We sent you an email, make sure you open it to join the future of music!')
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						var errr = response.a;
						switch (errr.$) {
							case 'BadBody':
								var str = errr.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											pendingMemberSubmitted: $elm$core$Maybe$Just('Did we break something or did you hax us?'),
											status: $elm$core$Maybe$Nothing
										}),
									$elm$core$Platform$Cmd$none);
							case 'BadUrl':
								var str = errr.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											pendingMemberSubmitted: $elm$core$Maybe$Just('That request URL looks really strange to us.'),
											status: $elm$core$Maybe$Nothing
										}),
									$elm$core$Platform$Cmd$none);
							case 'BadStatus':
								var _int = errr.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											pendingMemberSubmitted: $elm$core$Maybe$Just(
												'The server looks like it had a problem. Here\'s a hint: ' + $elm$core$String$fromInt(_int)),
											status: $elm$core$Maybe$Nothing
										}),
									$elm$core$Platform$Cmd$none);
							default:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											error: $elm$core$Maybe$Just('Ran into a thing, it hurt a lot. Can you tell us about it?'),
											status: $elm$core$Maybe$Nothing
										}),
									$elm$core$Platform$Cmd$none);
						}
					}
				case 'ClickedRegister':
					var _v4 = model.pendingMember;
					if (_v4.$ === 'Nothing') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var pendingMember = _v4.a;
						var message = $author$project$MiniMaker$pendingMemberErrMessage(pendingMember);
						if (message.$ === 'Nothing') {
							var $temp$msg = $author$project$MiniMaker$RegisterUser(pendingMember),
								$temp$model = model;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						} else {
							var error = message.a;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										pendingMemberError: $elm$core$Maybe$Just(error)
									}),
								$elm$core$Platform$Cmd$none);
						}
					}
				case 'RegisterUser':
					var pendingMember = msg.a;
					return _Utils_Tuple2(
						model,
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									$author$project$MiniMaker$reqRegister(pendingMember),
									$author$project$MiniMaker$reqLead(pendingMember)
								])));
				case 'Download':
					var url = msg.a;
					return _Utils_Tuple2(
						model,
						$author$project$Configs$download(url));
				case 'RollForTrack':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								status: $elm$core$Maybe$Just('Rolling some dice...')
							}),
						A3(
							$author$project$MiniMaker$modelToCombo,
							A2($elm$core$Maybe$withDefault, '', model.title),
							model.speed,
							model.voices));
				case 'RolledCombo':
					var combo = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								status: $elm$core$Maybe$Just('Making a track for you!')
							}),
						A4(
							$author$project$MiniMaker$reqTrack,
							model.member.email,
							model.member.uuid,
							A2($elm$core$Maybe$withDefault, '', model.title),
							combo));
				case 'UpdatePlayer':
					var _v6 = msg.a;
					var playback = _v6.a;
					var pMsg = _v6.b;
					var result = A2($author$project$Playback$update, pMsg, playback);
					var updated = result.a;
					var pMsg_ = result.b;
					var next = _Utils_update(
						model,
						{playback: updated});
					var _v7 = updated.a;
					if (_v7.$ === 'Nothing') {
						return _Utils_Tuple2(
							next,
							$author$project$Playback$trigger(pMsg_));
					} else {
						var track = _v7.a;
						return _Utils_Tuple2(
							next,
							$author$project$Playback$trigger(pMsg_));
					}
				default:
					return _Utils_Tuple2(
						A2($author$project$MiniMaker$apply, msg, model),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $author$project$MiniMaker$updateWithStorage = F2(
	function (msg, model) {
		if (msg.$ === 'GotTrack') {
			var response = msg.a;
			if (response.$ === 'Ok') {
				var track = response.a;
				var newTracks = A2($elm$core$List$cons, track, model.tracks);
				var pendingMember = function () {
					var _v2 = model.pendingMember;
					if (_v2.$ === 'Just') {
						var p = _v2.a;
						return $elm$core$Maybe$Just(
							_Utils_update(
								p,
								{
									trackIDs: A2(
										$elm$core$List$map,
										function ($) {
											return $.id;
										},
										newTracks)
								}));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							pendingMember: pendingMember,
							playback: _Utils_Tuple2(
								$elm$core$Maybe$Just(track),
								$author$project$Playback$Playing),
							status: $elm$core$Maybe$Nothing,
							tracks: newTracks
						}),
					$elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								$author$project$Playback$trigger(
								$author$project$Playback$Load(
									_Utils_ap($author$project$Configs$hostname, track.filepath))),
								$author$project$MiniMaker$scroll('#minimaker'),
								$author$project$Ports$setStorage(
								_Utils_Tuple2(
									'trackIDs',
									$author$project$Encoders$ints(
										A2(
											$elm$core$List$map,
											function ($) {
												return $.id;
											},
											newTracks))))
							])));
			} else {
				var errr = response.a;
				switch (errr.$) {
					case 'BadBody':
						var str = errr.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									error: $elm$core$Maybe$Just('How did you post that body?'),
									status: $elm$core$Maybe$Nothing
								}),
							$elm$core$Platform$Cmd$none);
					case 'BadUrl':
						var str = errr.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									error: $elm$core$Maybe$Just('Where did you get that URL?'),
									status: $elm$core$Maybe$Nothing
								}),
							$elm$core$Platform$Cmd$none);
					case 'BadStatus':
						var _int = errr.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									error: $elm$core$Maybe$Just(
										'The server looks like it had a problem. Here\'s a hint: ' + $elm$core$String$fromInt(_int)),
									status: $elm$core$Maybe$Nothing
								}),
							$elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									error: $elm$core$Maybe$Just('Ran into a thing, it hurt a lot. Can you tell us about it?'),
									status: $elm$core$Maybe$Nothing
								}),
							$elm$core$Platform$Cmd$none);
				}
			}
		} else {
			return A2($author$project$MiniMaker$update, msg, model);
		}
	});
var $author$project$MiniMaker$CloseSample = {$: 'CloseSample'};
var $author$project$MiniMaker$Download = function (a) {
	return {$: 'Download', a: a};
};
var $author$project$MiniMaker$PushedButton = {$: 'PushedButton'};
var $author$project$MiniMaker$RollForTrack = {$: 'RollForTrack'};
var $author$project$MiniMaker$UpdatePlayer = function (a) {
	return {$: 'UpdatePlayer', a: a};
};
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $author$project$Components$boxWith = function (c) {
	return $elm$html$Html$div(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('box'),
				$elm$html$Html$Attributes$class(c)
			]));
};
var $author$project$Components$col1 = function (child) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('column')
			]),
		_List_fromArray(
			[child]));
};
var $author$project$Components$cols = $elm$html$Html$div(
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('columns')
		]));
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$MiniMaker$description = A2(
	$elm$html$Html$div,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Hi! I\'m your Mini Song Maker.')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Use me to write a short song right now.')
				]))
		]));
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $author$project$Components$buttonDisabled = F2(
	function (attrs, content) {
		return A2(
			$elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$disabled(true),
						$elm$html$Html$Attributes$class('button')
					]),
				attrs),
			_List_fromArray(
				[
					$elm$html$Html$text(content)
				]));
	});
var $author$project$MiniMaker$disabledGoButton = A2(
	$author$project$Components$buttonDisabled,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('is-success is-fullwidth')
		]),
	'Make a Song');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Components$button = F3(
	function (click, attrs, content) {
		return A2(
			$elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('button'),
						$elm$html$Html$Events$onClick(click)
					]),
				attrs),
			_List_fromArray(
				[
					$elm$html$Html$text(content)
				]));
	});
var $author$project$MiniMaker$goButton = F2(
	function (title, msg) {
		return ('' === title) ? A3(
			$author$project$Components$button,
			msg,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('is-success is-focused is-fullwidth')
				]),
			'Make a Song') : A3(
			$author$project$Components$button,
			msg,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('is-success is-focused is-fullwidth')
				]),
			'Make \"' + (title + '\"'));
	});
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $author$project$MiniMaker$unfoundBugAsk = A2(
	$elm$html$Html$a,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$href('/contact')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text('Super weird bug! We didn\'t think this could happen. Can you tell us about it?')
		]));
var $author$project$MiniMaker$fireButton = F2(
	function (state, msg) {
		var _v0 = state.error;
		if (_v0.$ === 'Just') {
			var message = _v0.a;
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$author$project$MiniMaker$disabledGoButton,
						A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('my-3 has-text-danger')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(message)
							]))
					]));
		} else {
			var _v1 = state.title;
			if (_v1.$ === 'Just') {
				var title = _v1.a;
				return A2($author$project$MiniMaker$goButton, title, msg);
			} else {
				return $author$project$MiniMaker$unfoundBugAsk;
			}
		}
	});
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $author$project$Components$heading = function (content) {
	return A2(
		$elm$html$Html$h2,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('title')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(content)
			]));
};
var $author$project$MiniMaker$PlaySample = function (a) {
	return {$: 'PlaySample', a: a};
};
var $author$project$MiniMaker$SetSpeed = function (a) {
	return {$: 'SetSpeed', a: a};
};
var $author$project$MiniMaker$SetTitle = function (a) {
	return {$: 'SetTitle', a: a};
};
var $author$project$MiniMaker$ToggleHelp = function (a) {
	return {$: 'ToggleHelp', a: a};
};
var $author$project$MiniMaker$ToggleVoice = function (a) {
	return {$: 'ToggleVoice', a: a};
};
var $author$project$MiniMaker$Fast = {$: 'Fast'};
var $author$project$MiniMaker$Slow = {$: 'Slow'};
var $author$project$Components$col = function (attrs) {
	return $elm$html$Html$div(
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('column')
				]),
			attrs));
};
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$MiniMaker$speedBox = F2(
	function (current, change) {
		var show = function (s) {
			return _Utils_eq(s, current) ? _List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'z-index', '2'),
					$elm$html$Html$Attributes$class('selected has-background-success')
				]) : _List_Nil;
		};
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('my-6')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('my-3')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('What tempo should this song be?')
						])),
					$author$project$Components$cols(
					A2(
						$elm$core$List$map,
						function (child) {
							return A2(
								$author$project$Components$col,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('is-flex is-flex is-justify-content-center')
									]),
								_List_fromArray(
									[child]));
						},
						_List_fromArray(
							[
								A3(
								$author$project$Components$button,
								change($author$project$MiniMaker$Slow),
								show($author$project$MiniMaker$Slow),
								'Slow'),
								A3(
								$author$project$Components$button,
								change($author$project$MiniMaker$Medium),
								show($author$project$MiniMaker$Medium),
								'Medium'),
								A3(
								$author$project$Components$button,
								change($author$project$MiniMaker$Fast),
								show($author$project$MiniMaker$Fast),
								'Fast')
							])))
				]));
	});
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Components$textEditor = F3(
	function (p, curr, update) {
		return A2(
			$elm$html$Html$input,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$type_('text'),
					$elm$html$Html$Attributes$value(curr),
					$elm$html$Html$Events$onInput(update),
					$elm$html$Html$Attributes$placeholder(p),
					$elm$html$Html$Attributes$class('input my-3')
				]),
			_List_Nil);
	});
var $author$project$MiniMaker$titleBox = F2(
	function (current, change) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('is-flex is-justify-content-center columns')
				]),
			_List_fromArray(
				[
					$author$project$Components$col1(
					A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('What is the name of this song?')
							]))),
					$author$project$Components$col1(
					A3(
						$author$project$Components$textEditor,
						'Rock A Way',
						A2($elm$core$Maybe$withDefault, '', current),
						change))
				]));
	});
var $author$project$Components$desktopOnly = function (child) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('is-hidden-touch')
			]),
		_List_fromArray(
			[child]));
};
var $author$project$Components$mobileOnlyClass = $elm$html$Html$Attributes$class('is-hidden-tablet');
var $author$project$Components$mobileOnly = function (child) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[$author$project$Components$mobileOnlyClass]),
		_List_fromArray(
			[child]));
};
var $elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $author$project$View$roleIcon = function (role) {
	return A2(
		$elm$html$Html$img,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('is-block mx-auto'),
				$elm$html$Html$Attributes$width(50),
				$elm$html$Html$Attributes$height(50),
				$elm$html$Html$Attributes$src(
				'/assets/svg/' + ($author$project$Data$roleLabel(role).a + '.svg'))
			]),
		_List_Nil);
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Data$roleName = function (role) {
	return $author$project$Data$roleLabel(role).b;
};
var $author$project$Components$flexColumn = $elm$html$Html$Attributes$class('is-flex is-flex-direction-column');
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$Components$icon = function (name) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('icon')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src('/assets/svg/' + (name + '.svg'))
					]),
				_List_Nil)
			]));
};
var $author$project$Components$iconWith = F2(
	function (classes, name) {
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('icon'),
					$elm$html$Html$Attributes$class(classes)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src('/assets/svg/' + (name + '.svg'))
						]),
					_List_Nil)
				]));
	});
var $author$project$Components$mobileNotClass = $elm$html$Html$Attributes$class('is-hidden-mobile is-hidden-touch');
var $author$project$View$synthDrawerDesktop = F4(
	function (role, showHelp, toggleHelp, toggleSample) {
		var children = _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick(toggleHelp)
					]),
				_List_fromArray(
					[
						A2($author$project$Components$iconWith, 'bg-info', 'question-mark')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick(toggleSample)
					]),
				_List_fromArray(
					[
						$author$project$Components$icon('speaker')
					]))
			]);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$author$project$Components$mobileNotClass,
					$author$project$Components$flexColumn,
					$elm$html$Html$Attributes$class('px-5 mb-0 is-justify-content-space-around is-clickable')
				]),
			children);
	});
var $author$project$Data$synthHelp = function (role) {
	switch (role.$) {
		case 'Kick':
			return 'The lowest beat. Deep and full, gives structure to a song.';
		case 'Perc':
			return 'The middle beat. Punchy, things like claps, snare drums.';
		case 'Hat':
			return 'The highest beat. Bright and pingy, like a bell.';
		case 'Bass':
			return 'The lowest instrumental. Simple yet powerful foundation.';
		case 'Chords':
			return 'Middle or high instrumental. Tells a story through changing harmony.';
		default:
			return 'Middle or high instrumental. Melodies that you can sing.';
	}
};
var $author$project$View$synthIconHelpDesktop = F5(
	function (role, click, showHelp, toggleHelp, playSample) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('voice-help content'),
							$elm$html$Html$Attributes$class(
							showHelp ? 'visible' : 'hidden')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Data$synthHelp(role))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('is-flex')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('box mb-0'),
									$elm$html$Html$Events$onClick(
									click(role))
								]),
							_List_fromArray(
								[
									$author$project$View$roleIcon(role)
								])),
							A4(
							$author$project$View$synthDrawerDesktop,
							role,
							showHelp,
							toggleHelp(role),
							playSample)
						])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('mt-2 has-text-centered')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Data$roleName(role))
						]))
				]));
	});
var $author$project$Components$flexRow = $elm$html$Html$Attributes$class('is-flex is-flex-direction-row');
var $author$project$View$synthDrawerMobile = F4(
	function (role, showHelp, toggleHelp, toggleSample) {
		var children = _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick(toggleHelp)
					]),
				_List_fromArray(
					[
						A2($author$project$Components$iconWith, 'bg-info', 'question-mark')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Events$onClick(toggleSample)
					]),
				_List_fromArray(
					[
						$author$project$Components$icon('speaker')
					]))
			]);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$author$project$Components$flexRow,
					$elm$html$Html$Attributes$class('px-5 mb-0 is-justify-content-space-around is-clickable')
				]),
			children);
	});
var $author$project$View$synthIconHelpMobile = F5(
	function (role, click, showHelp, toggleHelp, playSample) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('voice-help content'),
							$elm$html$Html$Attributes$class(
							showHelp ? 'visible' : 'hidden')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Data$synthHelp(role))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('is-block')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('box mb-0 mx-3'),
									$elm$html$Html$Events$onClick(
									click(role))
								]),
							_List_fromArray(
								[
									$author$project$View$roleIcon(role)
								])),
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('mt-2 has-text-centered')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Data$roleName(role))
								]))
						])),
					A4(
					$author$project$View$synthDrawerMobile,
					role,
					showHelp,
					toggleHelp(role),
					playSample)
				]));
	});
var $author$project$View$synthIconHelp = F5(
	function (role, click, showHelp, toggleHelp, playSample) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					$author$project$Components$mobileOnly(
					A5($author$project$View$synthIconHelpMobile, role, click, showHelp, toggleHelp, playSample)),
					$author$project$Components$desktopOnly(
					A5($author$project$View$synthIconHelpDesktop, role, click, showHelp, toggleHelp, playSample))
				]));
	});
var $author$project$MiniMaker$voiceIconClass = $elm$html$Html$Attributes$class('is-flex is-flex-direction-column is-align-items-center column is-one-third is-one-third-mobile');
var $author$project$MiniMaker$availableIcon = F5(
	function (role, click, showHelp, toggleHelp, toggleSample) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[$author$project$MiniMaker$voiceIconClass]),
			_List_fromArray(
				[
					A5($author$project$View$synthIconHelp, role, click, showHelp, toggleHelp, toggleSample)
				]));
	});
var $author$project$Components$box = $elm$html$Html$div(
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('box')
		]));
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $author$project$MiniMaker$disabledIcon = function (role) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$author$project$MiniMaker$voiceIconClass,
				A2($elm$html$Html$Attributes$style, 'filter', 'blur(0.15rem) opacity(50%)')
			]),
		_List_fromArray(
			[
				$author$project$Components$box(
				$elm$core$List$singleton(
					$author$project$View$roleIcon(role))),
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Data$roleName(role))
					]))
			]));
};
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$Data$palette = _List_fromArray(
	['#ffa822', '#227bff', '#ff1900', '#00e5ff', '#11ff00', '#ee00ff']);
var $author$project$Data$findIndex = F2(
	function (x, xs) {
		var i = $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (j) {
					return !_Utils_eq(j, -1);
				},
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (j, a) {
							return _Utils_eq(x, a) ? j : (-1);
						}),
					xs)));
		if (i.$ === 'Nothing') {
			return -1;
		} else {
			var y = i.a;
			return y;
		}
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $author$project$Data$get = F2(
	function (i, xs) {
		if (_Utils_cmp(
			$elm$core$List$length(xs),
			i) < 0) {
			return $elm$core$Maybe$Nothing;
		} else {
			var tmp = $elm$core$Array$fromList(xs);
			return A2($elm$core$Array$get, i, tmp);
		}
	});
var $author$project$Data$relate = F3(
	function (x, xs, ys) {
		return A2(
			$author$project$Data$get,
			A2($author$project$Data$findIndex, x, xs),
			ys);
	});
var $author$project$Types$Bass = {$: 'Bass'};
var $author$project$Types$Chords = {$: 'Chords'};
var $author$project$Types$Hat = {$: 'Hat'};
var $author$project$Types$Kick = {$: 'Kick'};
var $author$project$Types$Melody = {$: 'Melody'};
var $author$project$Types$Perc = {$: 'Perc'};
var $author$project$Data$roles = _List_fromArray(
	[$author$project$Types$Kick, $author$project$Types$Perc, $author$project$Types$Hat, $author$project$Types$Bass, $author$project$Types$Chords, $author$project$Types$Melody]);
var $author$project$Data$roleColor = function (role) {
	var _v0 = A3($author$project$Data$relate, role, $author$project$Data$roles, $author$project$Data$palette);
	if (_v0.$ === 'Nothing') {
		return '';
	} else {
		var color = _v0.a;
		return color;
	}
};
var $author$project$View$roleIconColored = function (role) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('box'),
				A2(
				$elm$html$Html$Attributes$style,
				'background',
				$author$project$Data$roleColor(role))
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('mx-auto is-block'),
						$elm$html$Html$Attributes$width(50),
						$elm$html$Html$Attributes$height(50),
						$elm$html$Html$Attributes$src(
						'/assets/svg/' + ($author$project$Data$roleLabel(role).a + '.svg'))
					]),
				_List_Nil)
			]));
};
var $author$project$MiniMaker$selectedIcon = F2(
	function (role, toggle) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[$author$project$MiniMaker$voiceIconClass]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[toggle]),
					_List_fromArray(
						[
							$author$project$View$roleIconColored(role)
						])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[toggle]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Data$roleName(role))
						]))
				]));
	});
var $author$project$Data$synthRoles = _List_fromArray(
	[$author$project$Types$Kick, $author$project$Types$Perc, $author$project$Types$Hat, $author$project$Types$Bass, $author$project$Types$Chords, $author$project$Types$Melody]);
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $author$project$MiniMaker$voiceBox = F7(
	function (current, change, helps, showHelp, playSample, clearSample, sample) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('voice-box'),
					$elm$html$Html$Attributes$class(' mb-6')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('content')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('mt-3')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Which voices should we put in it? Pick up to 4.')
								])),
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('is-size-4 is-block has-text-centered')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Not sure which voices to pick? Read the '),
									A2(
									$elm$html$Html$a,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$href('/articles/quickstart'),
											$elm$html$Html$Attributes$target('_blank')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Quickstart')
										])),
									$elm$html$Html$text(' for some tips!')
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('mb-3 columns is-multiline is-mobile is-tablet is-desktop')
						]),
					A2(
						$elm$core$List$map,
						function (r) {
							if (A2($elm$core$List$member, r, current)) {
								return A2(
									$author$project$MiniMaker$selectedIcon,
									r,
									$elm$html$Html$Events$onClick(
										change(r)));
							} else {
								if (4 > $elm$core$List$length(current)) {
									var toggleSample = function () {
										if (sample.$ === 'Nothing') {
											return playSample(r);
										} else {
											var samp = sample.a;
											return _Utils_eq(samp, r) ? clearSample : playSample(r);
										}
									}();
									return A5(
										$author$project$MiniMaker$availableIcon,
										r,
										change,
										A2($elm$core$List$member, r, helps),
										showHelp,
										toggleSample);
								} else {
									return $author$project$MiniMaker$disabledIcon(r);
								}
							}
						},
						$author$project$Data$synthRoles)),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('is-size-4 is-block has-text-centered')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Want more voices? Use the '),
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'text-decoration', 'underline'),
									$elm$html$Html$Attributes$href('/song-designer')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Song Designer')
								])),
							$elm$html$Html$text(' for unlimited voices and sections.')
						]))
				]));
	});
var $author$project$MiniMaker$makerBoxes = F2(
	function (state, button) {
		var _class = function () {
			var _v0 = state.status;
			if (_v0.$ === 'Nothing') {
				return '';
			} else {
				return 'overlay-disabled';
			}
		}();
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(_class)
						]),
					_List_fromArray(
						[
							A2($author$project$MiniMaker$titleBox, state.title, $author$project$MiniMaker$SetTitle),
							A2($author$project$MiniMaker$speedBox, state.speed, $author$project$MiniMaker$SetSpeed),
							A7($author$project$MiniMaker$voiceBox, state.voices, $author$project$MiniMaker$ToggleVoice, state.helpTexts, $author$project$MiniMaker$ToggleHelp, $author$project$MiniMaker$PlaySample, $author$project$MiniMaker$CloseSample, state.showSample)
						])),
					button
				]));
	});
var $author$project$Components$colsMulti = $elm$html$Html$div(
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('columns is-multiline')
		]));
var $author$project$Components$colSize = F2(
	function (size, child) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('column'),
					$elm$html$Html$Attributes$class(size)
				]),
			_List_fromArray(
				[child]));
	});
var $author$project$Components$colsWith = function (attrs) {
	return $elm$html$Html$div(
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('columns')
				]),
			attrs));
};
var $elm$html$Html$label = _VirtualDom_node('label');
var $author$project$Components$label = function (content) {
	return A2(
		$elm$html$Html$label,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('m-0 mb-3 subtitle')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(content)
			]));
};
var $author$project$Components$svg = function (name) {
	return A2(
		$elm$html$Html$img,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$width(50),
				$elm$html$Html$Attributes$height(50),
				$elm$html$Html$Attributes$src('/assets/svg/' + (name + '.svg'))
			]),
		_List_Nil);
};
var $author$project$Playback$selectPlay = F2(
	function (track, trig) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('is-flex is-justify-content-space-around')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							trig(
								$author$project$Playback$Load(track.filepath)))
						]),
					_List_fromArray(
						[
							$author$project$Components$svg('play')
						]))
				]));
	});
var $author$project$Playback$listing = F4(
	function (p, signal, track, download) {
		var selection = p.a;
		var state = p.b;
		var change = function (msg) {
			return signal(
				A2(
					$author$project$Playback$update,
					msg,
					_Utils_Tuple2(
						$elm$core$Maybe$Just(track),
						state)));
		};
		var children = function () {
			if (selection.$ === 'Nothing') {
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							change(
								$author$project$Playback$Load(track.filepath)))
						]),
					_List_fromArray(
						[
							$author$project$Components$svg('play')
						]));
			} else {
				var selected = selection.a;
				return _Utils_eq(selected, track) ? A2($author$project$Playback$selectPlay, track, change) : A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							change(
								$author$project$Playback$Load(track.filepath)))
						]),
					_List_fromArray(
						[
							$author$project$Components$svg('play')
						]));
			}
		}();
		return A2(
			$author$project$Components$colSize,
			'is-full',
			A2(
				$author$project$Components$colsWith,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('is-vcentered')
					]),
				_List_fromArray(
					[
						$author$project$Components$col1(
						$author$project$Components$label(track.title)),
						$author$project$Components$col1(
						A2($author$project$Playback$selectPlay, track, change)),
						$author$project$Components$col1(
						A3(
							$author$project$Components$button,
							download(track.filepath),
							_List_Nil,
							'Download'))
					])));
	});
var $author$project$Playback$actionlist = F4(
	function (p, signal, tracks, download) {
		var selection = p.a;
		var model = p.b;
		return $author$project$Components$box(
			$elm$core$List$singleton(
				$author$project$Components$colsMulti(
					A2(
						$elm$core$List$map,
						function (x) {
							return A4($author$project$Playback$listing, p, signal, x, download);
						},
						tracks))));
	});
var $author$project$Components$paragraph = function (c) {
	return A2(
		$elm$html$Html$p,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('content')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(c)
			]));
};
var $author$project$Playback$emptyMessage = $author$project$Components$paragraph('Select any song to start playing.');
var $author$project$Components$colHalf = function (child) {
	return A2($author$project$Components$colSize, 'is-half', child);
};
var $author$project$Playback$Pause = {$: 'Pause'};
var $author$project$Playback$Play = {$: 'Play'};
var $author$project$Playback$Stop = {$: 'Stop'};
var $author$project$Playback$controls = F3(
	function (state, track, trig) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('is-flex is-justify-content-space-around')
				]),
			_List_fromArray(
				[
					function () {
					switch (state.$) {
						case 'Playing':
							return A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										trig($author$project$Playback$Pause))
									]),
								_List_fromArray(
									[
										$author$project$Components$svg('pause')
									]));
						case 'Paused':
							return A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										trig($author$project$Playback$Play))
									]),
								_List_fromArray(
									[
										$author$project$Components$svg('play')
									]));
						case 'Stopped':
							return A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										trig(
											$author$project$Playback$Load(track.filepath)))
									]),
								_List_fromArray(
									[
										$author$project$Components$svg('play')
									]));
						default:
							return $author$project$Playback$emptyMessage;
					}
				}(),
					function () {
					if (state.$ === 'Stopped') {
						return $elm$html$Html$text('');
					} else {
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick(
									trig($author$project$Playback$Stop))
								]),
							_List_fromArray(
								[
									$author$project$Components$svg('stop')
								]));
					}
				}()
				]));
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$core$Basics$round = _Basics_round;
var $author$project$View$timeString = function (t) {
	var s = A2(
		$elm$core$Basics$modBy,
		60,
		$elm$core$Basics$round(t));
	var pad2 = (s < 10) ? '0' : '';
	var ss = _Utils_ap(
		pad2,
		$elm$core$String$fromInt(s));
	var m = ($elm$core$Basics$round(t) / 60) | 0;
	var pad = (m < 10) ? '' : '';
	var mm = _Utils_ap(
		pad,
		$elm$core$String$fromInt(m));
	return mm + (':' + ss);
};
var $author$project$Playback$face = F3(
	function (track, state, trig) {
		return $author$project$Components$box(
			_List_fromArray(
				[
					$author$project$Components$cols(
					_List_fromArray(
						[
							$author$project$Components$colHalf(
							$author$project$Components$label('Artist')),
							$author$project$Components$colHalf(
							$author$project$Components$label(track.title))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('the-player')
						]),
					_List_Nil),
					$author$project$Components$cols(
					_List_fromArray(
						[
							$author$project$Components$colHalf(
							$author$project$Components$label('0:00')),
							$author$project$Components$colHalf(
							$author$project$Components$label(
								$author$project$View$timeString(track.duration_seconds)))
						])),
					A3($author$project$Playback$controls, state, track, trig)
				]));
	});
var $author$project$Playback$mini = F4(
	function (p, signal, tracks, download) {
		var selection = p.a;
		var model = p.b;
		if (selection.$ === 'Nothing') {
			return ($elm$core$List$length(tracks) > 0) ? $author$project$Components$box(
				_List_fromArray(
					[$author$project$Playback$emptyMessage])) : $elm$html$Html$text('');
		} else {
			var track = selection.a;
			var change = function (msg) {
				return signal(
					A2($author$project$Playback$update, msg, p));
			};
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('mini-player')
					]),
				$elm$core$List$singleton(
					$author$project$Components$cols(
						_List_fromArray(
							[
								A2(
								$author$project$Components$colSize,
								'is-one-half',
								A3($author$project$Playback$face, track, model, change)),
								A2(
								$author$project$Components$colSize,
								'is-two-thirds',
								A4($author$project$Playback$actionlist, p, signal, tracks, download))
							]))));
		}
	});
var $author$project$MiniMaker$postBox = function (status) {
	return $author$project$Components$box(
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('notification is-success is-light')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(status)
							]))
					]))
			]));
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $author$project$Embeds$allow = function (val) {
	return A2($elm$html$Html$Attributes$attribute, 'allow', val);
};
var $author$project$Embeds$frameborder = function (val) {
	return A2($elm$html$Html$Attributes$attribute, 'frameborder', val);
};
var $elm$html$Html$iframe = _VirtualDom_node('iframe');
var $author$project$Embeds$sampleId = function (role) {
	return $elm$core$String$fromInt(
		function () {
			switch (role.$) {
				case 'Bass':
					return 1209348034;
				case 'Chords':
					return 1209348019;
				case 'Melody':
					return 1209347977;
				case 'Hat':
					return 1209348001;
				case 'Kick':
					return 1209347995;
				default:
					return 1209347965;
			}
		}());
};
var $author$project$Embeds$sampleEmbedUrl = function (role) {
	return 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + ($author$project$Embeds$sampleId(role) + '&color=%23ef292a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true');
};
var $author$project$Embeds$sampleLink = function (role) {
	var end = function () {
		switch (role.$) {
			case 'Bass':
				return 'bassline';
			case 'Chords':
				return 'chords';
			case 'Melody':
				return 'melody';
			case 'Hat':
				return 'hats';
			case 'Kick':
				return 'kick';
			default:
				return 'percussion';
		}
	}();
	var base = 'https://soundcloud.com/synthonysound/sample-';
	return _Utils_ap(base, end);
};
var $author$project$Embeds$scEmbedHeight = 166;
var $author$project$Embeds$scStyle = 'font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;';
var $author$project$Embeds$scrolling = function (val) {
	return A2($elm$html$Html$Attributes$attribute, 'scrolling', val);
};
var $author$project$Embeds$styleCss = function (val) {
	return A2($elm$html$Html$Attributes$attribute, 'style', val);
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $author$project$Embeds$widthCustom = function (val) {
	return A2($elm$html$Html$Attributes$attribute, 'width', val);
};
var $author$project$Embeds$soundcloud = function (role) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('sc')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$iframe,
				_List_fromArray(
					[
						$author$project$Embeds$widthCustom('100%'),
						$elm$html$Html$Attributes$height($author$project$Embeds$scEmbedHeight),
						$author$project$Embeds$scrolling('no'),
						$author$project$Embeds$frameborder('no'),
						$author$project$Embeds$allow('autoplay'),
						$elm$html$Html$Attributes$src(
						$author$project$Embeds$sampleEmbedUrl(role))
					]),
				_List_Nil),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$author$project$Embeds$styleCss($author$project$Embeds$scStyle)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$href('https://soundcloud.com/synthonysound'),
								$elm$html$Html$Attributes$title('Synthony Sound'),
								$elm$html$Html$Attributes$target('_blank'),
								$author$project$Embeds$styleCss('color: #cccccc: text-decoration: none;')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Synthony Sound'),
								$elm$html$Html$text(' ')
							])),
						A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$href(
								$author$project$Embeds$sampleLink(role)),
								$elm$html$Html$Attributes$title('synthuary 1 - minimal'),
								$elm$html$Html$Attributes$target('_blank'),
								$author$project$Embeds$styleCss('color: #cccccc; text-decoration: none;')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Sample Pack')
							]))
					]))
			]));
};
var $author$project$MiniMaker$sampleBox = F2(
	function (role, close) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('sample-box')
				]),
			_List_fromArray(
				[
					A2(
					$author$project$Components$colsWith,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('is-justify-content-space-between')
						]),
					_List_fromArray(
						[
							$author$project$Components$col1(
							$author$project$Components$paragraph(
								'This sample demonstrates what ' + ($author$project$Data$roleName(role) + ' sounds like.'))),
							$author$project$Components$col1(
							A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('is-flex is-justify-content-flex-end is-align-items-center')
									]),
								_List_fromArray(
									[
										A3(
										$author$project$Components$button,
										close,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('is-success is-focused')
											]),
										'Close Sample to Make a Song')
									])))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('slide-in-out')
						]),
					_List_fromArray(
						[
							$author$project$Embeds$soundcloud(role)
						]))
				]));
	});
var $author$project$MiniMaker$ClickedRegister = {$: 'ClickedRegister'};
var $author$project$MiniMaker$UpdateEmail = function (a) {
	return {$: 'UpdateEmail', a: a};
};
var $author$project$MiniMaker$UpdateName = function (a) {
	return {$: 'UpdateName', a: a};
};
var $author$project$MiniMaker$cta = F5(
	function (pendingMember, uName, uEmail, register, maybeError) {
		return $author$project$Components$box(
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('mb-3')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Music is a very fleeting thing. These short songs will disappear into the void...')
						])),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('mb-3')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('To keep your songs and download them anywhere, just join here :)')
						])),
					$author$project$Components$label('Name'),
					A3($author$project$Components$textEditor, 'Name', pendingMember.name, uName),
					$author$project$Components$label('Email'),
					A3($author$project$Components$textEditor, 'Email', pendingMember.email, uEmail),
					A3(
					$author$project$Components$button,
					register,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('button is-success')
						]),
					'Join Synthony!'),
					function () {
					if (maybeError.$ === 'Nothing') {
						return $elm$html$Html$text('');
					} else {
						var msg = maybeError.a;
						return A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('has-text-danger')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(msg)
								]));
					}
				}()
				]));
	});
var $author$project$MiniMaker$pendingMemberIsOK = function (pendingMember) {
	return _Utils_eq(
		$elm$core$Maybe$Nothing,
		$author$project$MiniMaker$pendingMemberErrMessage(pendingMember)) ? true : false;
};
var $author$project$MiniMaker$showCta = F3(
	function (state, pendingMember, register) {
		if (!_Utils_eq(state.member, $author$project$Configs$anonMember)) {
			return $elm$html$Html$text('');
		} else {
			if ($elm$core$List$length(state.tracks) > 0) {
				var _v0 = state.pendingMemberSubmitted;
				if (_v0.$ === 'Just') {
					var submitted = _v0.a;
					return $author$project$Components$box(
						$elm$core$List$singleton(
							$author$project$Components$cols(
								_List_fromArray(
									[
										$author$project$Components$col1(
										$elm$html$Html$text(submitted)),
										$author$project$Components$col1(
										A3(
											$author$project$Components$button,
											$author$project$MiniMaker$RegisterUser(pendingMember),
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('button is-warning')
												]),
											'Try Again'))
									]))));
				} else {
					return A5(
						$author$project$MiniMaker$cta,
						pendingMember,
						$author$project$MiniMaker$UpdateName,
						$author$project$MiniMaker$UpdateEmail,
						$author$project$MiniMaker$pendingMemberIsOK(pendingMember) ? $author$project$MiniMaker$RegisterUser(pendingMember) : $author$project$MiniMaker$ClickedRegister,
						state.pendingMemberError);
				}
			} else {
				return $elm$html$Html$text('');
			}
		}
	});
var $author$project$MiniMaker$validReq = function (state) {
	var _v0 = state.title;
	if (_v0.$ === 'Nothing') {
		return false;
	} else {
		if (_v0.a === '') {
			return false;
		} else {
			var title = _v0.a;
			return $elm$core$List$length(state.voices) > 0;
		}
	}
};
var $author$project$MiniMaker$view = function (model) {
	var butt = function () {
		var _v1 = model.status;
		if (_v1.$ === 'Nothing') {
			return $author$project$Components$col1(
				function () {
					var _v2 = model.showSample;
					if (_v2.$ === 'Nothing') {
						return A2(
							$author$project$MiniMaker$fireButton,
							model,
							$author$project$MiniMaker$validReq(model) ? $author$project$MiniMaker$RollForTrack : $author$project$MiniMaker$PushedButton);
					} else {
						var role = _v2.a;
						return A2($author$project$MiniMaker$sampleBox, role, $author$project$MiniMaker$CloseSample);
					}
				}());
		} else {
			var status = _v1.a;
			return $author$project$MiniMaker$postBox(status);
		}
	}();
	return A2(
		$author$project$Components$boxWith,
		'mb-6',
		_List_fromArray(
			[
				$author$project$Components$heading('Mini Song Maker'),
				$author$project$Components$cols(
				_List_fromArray(
					[
						$author$project$Components$col1($author$project$MiniMaker$description)
					])),
				function () {
				var _v0 = model.pendingMember;
				if (_v0.$ === 'Nothing') {
					return $elm$html$Html$text('');
				} else {
					var p = _v0.a;
					return A3(
						$author$project$MiniMaker$showCta,
						model,
						p,
						$author$project$MiniMaker$RegisterUser(p));
				}
			}(),
				A4($author$project$Playback$mini, model.playback, $author$project$MiniMaker$UpdatePlayer, model.tracks, $author$project$MiniMaker$Download),
				A2($author$project$MiniMaker$makerBoxes, model, butt)
			]));
};
var $author$project$MiniMaker$main = $elm$browser$Browser$element(
	{
		init: $author$project$MiniMaker$init,
		subscriptions: function (_v0) {
			return $elm$core$Platform$Sub$none;
		},
		update: $author$project$MiniMaker$updateWithStorage,
		view: $author$project$MiniMaker$view
	});
var $author$project$Designer$Chart$ChangeTrack = F2(
	function (a, b) {
		return {$: 'ChangeTrack', a: a, b: b};
	});
var $author$project$Designer$Chart$CloseArc = {$: 'CloseArc'};
var $author$project$Designer$Chart$CloseMeta = {$: 'CloseMeta'};
var $author$project$Designer$Chart$CreateArc = {$: 'CreateArc'};
var $author$project$Designer$Chart$Download = function (a) {
	return {$: 'Download', a: a};
};
var $author$project$Designer$Chart$EditArc = function (a) {
	return {$: 'EditArc', a: a};
};
var $author$project$Designer$Chart$EditGroup = function (a) {
	return {$: 'EditGroup', a: a};
};
var $author$project$Designer$Chart$EditMeta = {$: 'EditMeta'};
var $author$project$Designer$Chart$GotTrack = function (a) {
	return {$: 'GotTrack', a: a};
};
var $author$project$Designer$Chart$GotTracks = function (a) {
	return {$: 'GotTracks', a: a};
};
var $author$project$Designer$Chart$ReqTrack = F2(
	function (a, b) {
		return {$: 'ReqTrack', a: a, b: b};
	});
var $author$project$Designer$Chart$SaveArc = function (a) {
	return {$: 'SaveArc', a: a};
};
var $author$project$Designer$Chart$SaveMeta = function (a) {
	return {$: 'SaveMeta', a: a};
};
var $author$project$Designer$Chart$UpdateArc = function (a) {
	return {$: 'UpdateArc', a: a};
};
var $author$project$Designer$Chart$UpdateMeta = function (a) {
	return {$: 'UpdateMeta', a: a};
};
var $author$project$Designer$Chart$UpdatePlaylist = function (a) {
	return {$: 'UpdatePlaylist', a: a};
};
var $author$project$Designer$Chart$ViewArc = function (a) {
	return {$: 'ViewArc', a: a};
};
var $author$project$Comm$Post$bodyFetchSongs = F2(
	function (email, uuid) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('songs')),
					_Utils_Tuple2(
					'email',
					$elm$json$Json$Encode$string(email)),
					_Utils_Tuple2(
					'uuid',
					$elm$json$Json$Encode$string(uuid))
				]));
	});
var $author$project$Comm$Decoders$decodeTrack = A7(
	$elm$json$Json$Decode$map6,
	$author$project$Types$TrackMeta,
	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'account_id', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'filepath', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'size_bytes', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'duration_seconds', $elm$json$Json$Decode$float));
var $author$project$Comm$Post$fetchSongs = F3(
	function (email, uuid, cb) {
		return $elm$http$Http$post(
			{
				body: $elm$http$Http$jsonBody(
					A2($author$project$Comm$Post$bodyFetchSongs, email, uuid)),
				expect: A2(
					$elm$http$Http$expectJson,
					cb,
					$elm$json$Json$Decode$list($author$project$Comm$Decoders$decodeTrack)),
				url: $author$project$Configs$selfUrl('user')
			});
	});
var $author$project$Designer$Chart$Viewing = {$: 'Viewing'};
var $author$project$ScoreMeta$Model = F5(
	function (title, tempo, bpm, key, cpc) {
		return {bpm: bpm, cpc: cpc, key: key, tempo: tempo, title: title};
	});
var $author$project$ScoreMeta$empty = A5($author$project$ScoreMeta$Model, 'New Song', '110', 110, 6, 4);
var $author$project$Components$Group$from = function (things) {
	return _Utils_Tuple2($elm$core$Maybe$Nothing, things);
};
var $author$project$Components$Playlist$new = _Utils_Tuple2(_List_Nil, _List_Nil);
var $author$project$Arc$Beat = {$: 'Beat'};
var $author$project$Arc$Model = F3(
	function (title, size, style) {
		return {size: size, style: style, title: title};
	});
var $author$project$Arc$new = A3($author$project$Arc$Model, 'intro/outro', 3, $author$project$Arc$Beat);
var $author$project$Arc$Mix = {$: 'Mix'};
var $author$project$Arc$new2 = A3($author$project$Arc$Model, 'Verse', 4, $author$project$Arc$Mix);
var $author$project$Arc$Groove = {$: 'Groove'};
var $author$project$Arc$new3 = A3($author$project$Arc$Model, 'Chorus', 3, $author$project$Arc$Groove);
var $author$project$Arc$Abstract = {$: 'Abstract'};
var $author$project$Arc$new4 = A3($author$project$Arc$Model, 'Break', 3, $author$project$Arc$Abstract);
var $author$project$Designer$Chart$someArcs = _List_fromArray(
	[$author$project$Arc$new, $author$project$Arc$new2, $author$project$Arc$new3, $author$project$Arc$new2, $author$project$Arc$new3, $author$project$Arc$new4, $author$project$Arc$new3, $author$project$Arc$new3, $author$project$Arc$new]);
var $author$project$Designer$Chart$newModel = _Utils_Tuple2(
	{
		arcs: $author$project$Components$Group$from($author$project$Designer$Chart$someArcs),
		httpMessage: '',
		meta: $author$project$ScoreMeta$empty,
		playlist: $author$project$Components$Playlist$new
	},
	$author$project$Designer$Chart$Viewing);
var $author$project$Designer$Chart$init = F2(
	function (flags, loadTracks) {
		if (flags.$ === 'Nothing') {
			return _Utils_Tuple2(
				_Utils_Tuple2($author$project$Configs$anonMember, $author$project$Designer$Chart$newModel),
				$elm$core$Platform$Cmd$none);
		} else {
			var member = flags.a;
			return _Utils_Tuple2(
				_Utils_Tuple2(member, $author$project$Designer$Chart$newModel),
				A3($author$project$Comm$Post$fetchSongs, member.email, member.uuid, loadTracks));
		}
	});
var $author$project$Designer$Chart$FinishedTrack = function (a) {
	return {$: 'FinishedTrack', a: a};
};
var $author$project$Designer$Chart$LoadedTrack = function (a) {
	return {$: 'LoadedTrack', a: a};
};
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $author$project$PlaybackPorts$finishedTrack = _Platform_incomingPort(
	'finishedTrack',
	A2(
		$elm$json$Json$Decode$andThen,
		function (_v0) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (_v1) {
					return $elm$json$Json$Decode$succeed(
						_Utils_Tuple2(_v0, _v1));
				},
				A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$string)));
var $author$project$PlaybackPorts$loadedTrack = _Platform_incomingPort(
	'loadedTrack',
	A2(
		$elm$json$Json$Decode$andThen,
		function (_v0) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (_v1) {
					return $elm$json$Json$Decode$succeed(
						_Utils_Tuple2(_v0, _v1));
				},
				A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$string)));
var $author$project$Designer$Chart$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				$author$project$PlaybackPorts$loadedTrack(
				function (tuple) {
					return $author$project$Designer$Chart$LoadedTrack(tuple);
				}),
				$author$project$PlaybackPorts$finishedTrack(
				function (tuple) {
					return $author$project$Designer$Chart$FinishedTrack(tuple);
				})
			]));
};
var $author$project$Components$Playlist$Add = function (a) {
	return {$: 'Add', a: a};
};
var $author$project$Components$Playlist$AddMany = function (a) {
	return {$: 'AddMany', a: a};
};
var $author$project$Components$Playlist$Change = F2(
	function (a, b) {
		return {$: 'Change', a: a, b: b};
	});
var $author$project$Designer$Chart$EditingArc = function (a) {
	return {$: 'EditingArc', a: a};
};
var $author$project$Designer$Chart$EditingMeta = function (a) {
	return {$: 'EditingMeta', a: a};
};
var $author$project$Components$Player$Finished = {$: 'Finished'};
var $author$project$Components$Player$Loaded = {$: 'Loaded'};
var $author$project$Designer$Chart$Requesting = {$: 'Requesting'};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $author$project$Components$Playlist$id = function (index) {
	return 'player-' + $elm$core$String$fromInt(index);
};
var $author$project$Components$Player$Empty = {$: 'Empty'};
var $author$project$Components$Player$new = function (nodeId) {
	return _Utils_Tuple2(nodeId, $author$project$Components$Player$Empty);
};
var $author$project$Components$Playlist$apply = F2(
	function (msg, _v0) {
		var players = _v0.a;
		var tracks = _v0.b;
		switch (msg.$) {
			case 'Add':
				var track = msg.a;
				var index = $elm$core$List$length(tracks);
				var player = $author$project$Components$Player$new(
					$author$project$Components$Playlist$id(index));
				return _Utils_Tuple2(
					A2($elm$core$List$cons, player, players),
					A2($elm$core$List$cons, track, tracks));
			case 'AddMany':
				var moreTracks = msg.a;
				var size = $elm$core$List$length(tracks);
				var morePlayers = A2(
					$elm$core$List$indexedMap,
					F2(
						function (i, track) {
							return $author$project$Components$Player$new(
								$author$project$Components$Playlist$id(i + size));
						}),
					moreTracks);
				return _Utils_Tuple2(
					A2($elm$core$List$append, players, morePlayers),
					A2($elm$core$List$append, tracks, moreTracks));
			default:
				return _Utils_Tuple2(players, tracks);
		}
	});
var $author$project$Arc$Editing = F2(
	function (a, b) {
		return {$: 'Editing', a: a, b: b};
	});
var $author$project$ScoreMeta$Editing = F2(
	function (a, b) {
		return {$: 'Editing', a: a, b: b};
	});
var $author$project$Arc$Viewing = function (a) {
	return {$: 'Viewing', a: a};
};
var $author$project$Arc$edit = F2(
	function (msg, item) {
		switch (msg.$) {
			case 'SetTitle':
				var title = msg.a;
				return _Utils_update(
					item,
					{title: title});
			case 'SetSize':
				var size = msg.a;
				return _Utils_update(
					item,
					{size: size});
			default:
				var style = msg.a;
				return _Utils_update(
					item,
					{style: style});
		}
	});
var $author$project$Arc$apply = F2(
	function (msg, state) {
		if (state.$ === 'Editing') {
			var orig = state.a;
			var next = state.b;
			return A2(
				$author$project$Arc$Editing,
				orig,
				A2($author$project$Arc$edit, msg, next));
		} else {
			var item = state.a;
			return $author$project$Arc$Viewing(item);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$Tools$insertAt = F3(
	function (index, el, els) {
		return $elm$core$List$concat(
			_List_fromArray(
				[
					A2($elm$core$List$take, index, els),
					$elm$core$List$singleton(el),
					A2($elm$core$List$drop, index, els)
				]));
	});
var $author$project$Tools$removeAt = F2(
	function (index, els) {
		if (!index) {
			return A2($elm$core$List$drop, 1, els);
		} else {
			var n = index;
			return $elm$core$List$concat(
				_List_fromArray(
					[
						A2($elm$core$List$take, n, els),
						A2($elm$core$List$drop, n + 1, els)
					]));
		}
	});
var $author$project$Components$Group$apply = F2(
	function (msg, model) {
		var mIndex = model.a;
		var children = model.b;
		switch (msg.$) {
			case 'View':
				return _Utils_Tuple2($elm$core$Maybe$Nothing, children);
			case 'InsertAt':
				var index = msg.a;
				var el = msg.b;
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A3($author$project$Tools$insertAt, index, el, children));
			case 'MoveTo':
				var target = msg.a;
				var fromI = msg.b;
				var toI = msg.c;
				var filtered = A2($author$project$Tools$removeAt, fromI, children);
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A3($author$project$Tools$insertAt, toI, target, filtered));
			default:
				var index = msg.a;
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A2($author$project$Tools$removeAt, index, children));
		}
	});
var $author$project$ScoreMeta$Viewing = function (a) {
	return {$: 'Viewing', a: a};
};
var $author$project$ScoreMeta$bpmMax = 180.0;
var $author$project$ScoreMeta$bpmMin = 44.0;
var $elm$core$String$toFloat = _String_toFloat;
var $author$project$ScoreMeta$edit = F2(
	function (msg, meta) {
		switch (msg.$) {
			case 'SetTitle':
				var title = msg.a;
				return _Utils_update(
					meta,
					{title: title});
			case 'SetKey':
				var index = msg.a;
				return _Utils_update(
					meta,
					{key: index});
			case 'SetBpm':
				var tempoString = msg.a;
				var c = A2(
					$elm$core$Maybe$withDefault,
					meta.bpm,
					$elm$core$String$toFloat(tempoString));
				var bpm = (_Utils_cmp(c, $author$project$ScoreMeta$bpmMin) < 0) ? $author$project$ScoreMeta$bpmMin : ((_Utils_cmp(c, $author$project$ScoreMeta$bpmMax) > 0) ? $author$project$ScoreMeta$bpmMax : c);
				return _Utils_update(
					meta,
					{bpm: bpm, tempo: tempoString});
			default:
				var cpc = msg.a;
				return _Utils_update(
					meta,
					{cpc: cpc});
		}
	});
var $author$project$ScoreMeta$apply = F2(
	function (msg, state) {
		if (state.$ === 'Editing') {
			var orig = state.a;
			var next = state.b;
			return A2(
				$author$project$ScoreMeta$Editing,
				orig,
				A2($author$project$ScoreMeta$edit, msg, next));
		} else {
			var item = state.a;
			return $author$project$ScoreMeta$Viewing(item);
		}
	});
var $author$project$Components$Group$by = F2(
	function (index, things) {
		return _Utils_Tuple2(
			$elm$core$Maybe$Just(index),
			things);
	});
var $author$project$Arc$create = A3($author$project$Arc$Model, 'New Arc', 5, $author$project$Arc$Mix);
var $author$project$Arc$editArc = function (arc) {
	return A2($author$project$Arc$Editing, arc, arc);
};
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $author$project$Tools$replaceAt = F3(
	function (index, el, els) {
		return $elm$core$Array$toList(
			A3(
				$elm$core$Array$set,
				index,
				el,
				$elm$core$Array$fromList(els)));
	});
var $author$project$Designer$Chart$apply = F2(
	function (msg, _v0) {
		var member = _v0.a;
		var model = _v0.b;
		var store = model.a;
		var state = model.b;
		var _v1 = store;
		var playlist = _v1.playlist;
		var meta = _v1.meta;
		var arcs = _v1.arcs;
		var httpMessage = _v1.httpMessage;
		switch (state.$) {
			case 'Viewing':
				switch (msg.$) {
					case 'CreateArc':
						return _Utils_Tuple2(
							_Utils_update(
								store,
								{
									arcs: _Utils_Tuple2(
										arcs.a,
										A2(
											$elm$core$List$append,
											arcs.b,
											_List_fromArray(
												[$author$project$Arc$create])))
								}),
							$author$project$Designer$Chart$Viewing);
					case 'ViewArc':
						var card = msg.a;
						var index = A2($author$project$Tools$findIndex, card, arcs.b);
						var newArcs = A2($author$project$Components$Group$by, index, arcs.b);
						return _Utils_Tuple2(
							_Utils_update(
								store,
								{arcs: newArcs}),
							$author$project$Designer$Chart$EditingArc(
								$author$project$Arc$editArc(card)));
					case 'EditGroup':
						var gMsg = msg.a;
						var arcs2 = A2($author$project$Components$Group$apply, gMsg, arcs);
						return _Utils_Tuple2(
							_Utils_update(
								store,
								{arcs: arcs2}),
							$author$project$Designer$Chart$Viewing);
					case 'EditMeta':
						return _Utils_Tuple2(
							store,
							$author$project$Designer$Chart$EditingMeta(
								A2($author$project$ScoreMeta$Editing, meta, meta)));
					default:
						return model;
				}
			case 'EditingArc':
				var cardState = state.a;
				switch (msg.$) {
					case 'UpdateArc':
						var cMsg = msg.a;
						return _Utils_Tuple2(
							store,
							$author$project$Designer$Chart$EditingArc(
								A2($author$project$Arc$apply, cMsg, cardState)));
					case 'SaveArc':
						var next = msg.a;
						var _v5 = arcs;
						var index = _v5.a;
						var cards = _v5.b;
						var i = A2($elm$core$Maybe$withDefault, -1, index);
						var newArcs = _Utils_Tuple2(
							$elm$core$Maybe$Nothing,
							A3($author$project$Tools$replaceAt, i, next, cards));
						return _Utils_Tuple2(
							_Utils_update(
								store,
								{arcs: newArcs}),
							$author$project$Designer$Chart$Viewing);
					case 'CloseArc':
						return _Utils_Tuple2(store, $author$project$Designer$Chart$Viewing);
					case 'EditArc':
						var card = msg.a;
						var cards = arcs.b;
						var i = A2($author$project$Tools$findIndex, card, cards);
						var newArcs = _Utils_Tuple2(
							$elm$core$Maybe$Just(i),
							cards);
						return _Utils_Tuple2(
							_Utils_update(
								store,
								{arcs: newArcs}),
							$author$project$Designer$Chart$EditingArc(
								A2($author$project$Arc$Editing, card, card)));
					case 'GotTrack':
						var result = msg.a;
						if (result.$ === 'Ok') {
							var message = result.a.message;
							var track = result.a.track;
							var p = A2(
								$author$project$Components$Playlist$apply,
								$author$project$Components$Playlist$Add(track),
								playlist);
							return _Utils_Tuple2(
								_Utils_update(
									store,
									{playlist: p}),
								$author$project$Designer$Chart$EditingArc(cardState));
						} else {
							var error = result.a;
							return model;
						}
					default:
						return model;
				}
			case 'EditingMeta':
				var metaState = state.a;
				switch (msg.$) {
					case 'UpdateMeta':
						var mMsg = msg.a;
						return _Utils_Tuple2(
							store,
							$author$project$Designer$Chart$EditingMeta(
								A2($author$project$ScoreMeta$apply, mMsg, metaState)));
					case 'SaveMeta':
						var nextMeta = msg.a;
						return _Utils_Tuple2(
							_Utils_update(
								store,
								{meta: nextMeta}),
							$author$project$Designer$Chart$Viewing);
					case 'CloseMeta':
						return _Utils_Tuple2(store, $author$project$Designer$Chart$Viewing);
					case 'GotTrack':
						var result = msg.a;
						if (result.$ === 'Ok') {
							var message = result.a.message;
							var track = result.a.track;
							var p = A2(
								$author$project$Components$Playlist$apply,
								$author$project$Components$Playlist$Add(track),
								playlist);
							return _Utils_Tuple2(
								_Utils_update(
									store,
									{playlist: p}),
								$author$project$Designer$Chart$EditingMeta(metaState));
						} else {
							var error = result.a;
							return model;
						}
					default:
						return model;
				}
			default:
				return model;
		}
	});
var $author$project$Types$TrackResponse = F2(
	function (track, message) {
		return {message: message, track: track};
	});
var $author$project$Comm$Decoders$decodeTrackResponse = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Types$TrackResponse,
	A2($elm$json$Json$Decode$field, 'track', $author$project$Comm$Decoders$decodeTrack),
	A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string));
var $author$project$Encoders$encodeMember = function (member) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(member.name)),
				_Utils_Tuple2(
				'email',
				$elm$json$Json$Encode$string(member.email)),
				_Utils_Tuple2(
				'uuid',
				$elm$json$Json$Encode$string(member.uuid))
			]));
};
var $author$project$Arc$styleLabel = function (style) {
	switch (style.$) {
		case 'Beat':
			return 'Beat';
		case 'Groove':
			return 'Groove';
		case 'Mix':
			return 'Mix';
		case 'Instrumental':
			return 'Instrumental';
		default:
			return 'Synth';
	}
};
var $elm$core$String$toLower = _String_toLower;
var $author$project$Designer$Chart$encodeArc = function (_v0) {
	var title = _v0.title;
	var size = _v0.size;
	var style = _v0.style;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$string(title)),
				_Utils_Tuple2(
				'size',
				$elm$json$Json$Encode$int(size)),
				_Utils_Tuple2(
				'style',
				$elm$json$Json$Encode$string(
					$elm$core$String$toLower(
						$author$project$Arc$styleLabel(style))))
			]));
};
var $author$project$Designer$Chart$encodeScoreMeta = function (_v0) {
	var title = _v0.title;
	var bpm = _v0.bpm;
	var key = _v0.key;
	var cpc = _v0.cpc;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$string(title)),
				_Utils_Tuple2(
				'bpm',
				$elm$json$Json$Encode$float(bpm)),
				_Utils_Tuple2(
				'key',
				$elm$json$Json$Encode$int(key)),
				_Utils_Tuple2(
				'cpc',
				$elm$json$Json$Encode$int(cpc))
			]));
};
var $author$project$Designer$Chart$encodeReqTrack = F2(
	function (meta, arcs) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'meta',
					$author$project$Designer$Chart$encodeScoreMeta(meta)),
					_Utils_Tuple2(
					'arcs',
					A2($elm$json$Json$Encode$list, $author$project$Designer$Chart$encodeArc, arcs))
				]));
	});
var $author$project$Designer$Chart$encodeSongRequest = F3(
	function (member, meta, arcs) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'member',
					$author$project$Encoders$encodeMember(member)),
					_Utils_Tuple2(
					'scoredef',
					A2($author$project$Designer$Chart$encodeReqTrack, meta, arcs))
				]));
	});
var $author$project$Designer$Chart$reqTrack = F4(
	function (member, meta, arcs, complete) {
		return $elm$http$Http$post(
			{
				body: $elm$http$Http$jsonBody(
					A3($author$project$Designer$Chart$encodeSongRequest, member, meta, arcs)),
				expect: A2($elm$http$Http$expectJson, complete, $author$project$Comm$Decoders$decodeTrackResponse),
				url: $author$project$Configs$apiUrl('track/next')
			});
	});
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $author$project$Components$Player$Loading = function (a) {
	return {$: 'Loading', a: a};
};
var $author$project$Components$Player$Paused = function (a) {
	return {$: 'Paused', a: a};
};
var $author$project$Components$Player$Playing = function (a) {
	return {$: 'Playing', a: a};
};
var $author$project$Components$Player$apply = F2(
	function (msg, model) {
		var nodeId = model.a;
		var state = model.b;
		var to = function (s) {
			return _Utils_Tuple2(nodeId, s);
		};
		switch (state.$) {
			case 'Empty':
				if (msg.$ === 'Load') {
					var track = msg.a;
					return to(
						$author$project$Components$Player$Loading(track));
				} else {
					return model;
				}
			case 'Loading':
				var track = state.a;
				switch (msg.$) {
					case 'Loaded':
						return to(
							$author$project$Components$Player$Playing(track));
					case 'Stop':
						return to($author$project$Components$Player$Empty);
					default:
						return model;
				}
			case 'Paused':
				var track = state.a;
				switch (msg.$) {
					case 'Play':
						return to(
							$author$project$Components$Player$Playing(track));
					case 'Stop':
						return to($author$project$Components$Player$Empty);
					default:
						return model;
				}
			default:
				var track = state.a;
				switch (msg.$) {
					case 'Pause':
						return to(
							$author$project$Components$Player$Paused(track));
					case 'Stop':
						return to($author$project$Components$Player$Empty);
					case 'Finished':
						return to(
							$author$project$Components$Player$Paused(track));
					default:
						return model;
				}
		}
	});
var $author$project$Tools$getOr = F3(
	function (index, list, _default) {
		return A2(
			$elm$core$Maybe$withDefault,
			_default,
			A2(
				$elm$core$Array$get,
				index,
				$elm$core$Array$fromList(list)));
	});
var $author$project$Components$Player$jsId = function (id) {
	return '#' + id;
};
var $author$project$Components$Player$trigger = F2(
	function (msg, model) {
		var nodeId = model.a;
		var state = model.b;
		switch (state.$) {
			case 'Empty':
				if (msg.$ === 'Load') {
					var track = msg.a;
					return $author$project$PlaybackPorts$createSource(
						_Utils_Tuple2(
							$author$project$Components$Player$jsId(nodeId),
							track.filepath));
				} else {
					return $elm$core$Platform$Cmd$none;
				}
			case 'Loading':
				var track = state.a;
				if (msg.$ === 'Loaded') {
					return $elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								$author$project$PlaybackPorts$playMusic(
								$author$project$Components$Player$jsId(nodeId)),
								$author$project$Ports$scrollTo(
								$author$project$Components$Player$jsId(nodeId))
							]));
				} else {
					return $elm$core$Platform$Cmd$none;
				}
			case 'Paused':
				var track = state.a;
				switch (msg.$) {
					case 'Play':
						return $author$project$PlaybackPorts$playMusic(
							$author$project$Components$Player$jsId(nodeId));
					case 'Stop':
						return $author$project$PlaybackPorts$stopMusic(
							$author$project$Components$Player$jsId(nodeId));
					default:
						return $elm$core$Platform$Cmd$none;
				}
			default:
				var track = state.a;
				switch (msg.$) {
					case 'Pause':
						return $author$project$PlaybackPorts$pauseMusic(
							$author$project$Components$Player$jsId(nodeId));
					case 'Stop':
						return $author$project$PlaybackPorts$stopMusic(
							$author$project$Components$Player$jsId(nodeId));
					case 'Finished':
						return $author$project$PlaybackPorts$pauseMusic(
							$author$project$Components$Player$jsId(nodeId));
					default:
						return $elm$core$Platform$Cmd$none;
				}
		}
	});
var $author$project$Components$Playlist$update = F2(
	function (msg, model) {
		var players = model.a;
		var tracks = model.b;
		if (msg.$ === 'Change') {
			var index = msg.a;
			var pMsg = msg.b;
			var state = A3(
				$author$project$Tools$getOr,
				index,
				players,
				$author$project$Components$Player$new(
					$author$project$Components$Playlist$id(index)));
			var player = A2($author$project$Components$Player$apply, pMsg, state);
			return _Utils_Tuple2(
				_Utils_Tuple2(
					A3($author$project$Tools$replaceAt, index, player, players),
					tracks),
				A2($author$project$Components$Player$trigger, pMsg, state));
		} else {
			return _Utils_Tuple2(
				A2($author$project$Components$Playlist$apply, msg, model),
				$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Designer$Chart$update = F3(
	function (msg, _v0, onComplete) {
		var member = _v0.a;
		var model = _v0.b;
		var store = model.a;
		var playlist = store.playlist;
		var meta = store.meta;
		var arcs = store.arcs;
		var state = model.b;
		var players = playlist.a;
		var _v1 = $elm$core$List$unzip(players);
		var ids = _v1.a;
		var states = _v1.b;
		switch (msg.$) {
			case 'ChangeTrack':
				var index = msg.a;
				var playerMsg = msg.b;
				var _v3 = A2(
					$author$project$Components$Playlist$update,
					A2($author$project$Components$Playlist$Change, index, playerMsg),
					playlist);
				var nextPlayer = _v3.a;
				var cmdr = _v3.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						member,
						_Utils_Tuple2(
							_Utils_update(
								store,
								{playlist: nextPlayer}),
							state)),
					cmdr);
			case 'LoadedTrack':
				var _v4 = msg.a;
				var nodeId = _v4.a;
				var audioSrc = _v4.b;
				var index = A2($author$project$Tools$findIndex, nodeId, ids);
				var _v5 = A2(
					$author$project$Components$Playlist$update,
					A2($author$project$Components$Playlist$Change, index, $author$project$Components$Player$Loaded),
					playlist);
				var nextPlayer = _v5.a;
				var cmdr = _v5.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						member,
						_Utils_Tuple2(
							_Utils_update(
								store,
								{playlist: nextPlayer}),
							state)),
					cmdr);
			case 'FinishedTrack':
				var _v6 = msg.a;
				var nodeId = _v6.a;
				var audioSrc = _v6.b;
				var index = A2($author$project$Tools$findIndex, nodeId, ids);
				var _v7 = A2(
					$author$project$Components$Playlist$update,
					A2($author$project$Components$Playlist$Change, index, $author$project$Components$Player$Finished),
					playlist);
				var nextPlayer = _v7.a;
				var cmdr = _v7.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						member,
						_Utils_Tuple2(
							_Utils_update(
								store,
								{playlist: nextPlayer}),
							state)),
					cmdr);
			case 'GotTracks':
				var res = msg.a;
				if (res.$ === 'Ok') {
					var tracks = res.a;
					var addTracks = function (prevlist) {
						if (!$author$project$Configs$devMode) {
							return A2(
								$author$project$Components$Playlist$apply,
								$author$project$Components$Playlist$AddMany(tracks),
								prevlist);
						} else {
							var ts = A2(
								$elm$core$List$map,
								function (track) {
									return _Utils_update(
										track,
										{filepath: 'http://localhost:3000' + track.filepath});
								},
								tracks);
							return A2(
								$author$project$Components$Playlist$apply,
								$author$project$Components$Playlist$AddMany(ts),
								prevlist);
						}
					};
					switch (state.$) {
						case 'Requesting':
							return _Utils_Tuple2(
								_Utils_Tuple2(
									member,
									_Utils_Tuple2(
										_Utils_update(
											store,
											{
												playlist: addTracks(playlist)
											}),
										$author$project$Designer$Chart$Requesting)),
								$elm$core$Platform$Cmd$none);
						case 'Viewing':
							return _Utils_Tuple2(
								_Utils_Tuple2(
									member,
									_Utils_Tuple2(
										_Utils_update(
											store,
											{
												playlist: addTracks(playlist)
											}),
										$author$project$Designer$Chart$Viewing)),
								$elm$core$Platform$Cmd$none);
						case 'EditingArc':
							var arcState = state.a;
							return _Utils_Tuple2(
								_Utils_Tuple2(
									member,
									_Utils_Tuple2(
										_Utils_update(
											store,
											{
												playlist: addTracks(playlist)
											}),
										$author$project$Designer$Chart$EditingArc(arcState))),
								$elm$core$Platform$Cmd$none);
						default:
							var metaState = state.a;
							return _Utils_Tuple2(
								_Utils_Tuple2(
									member,
									_Utils_Tuple2(
										_Utils_update(
											store,
											{
												playlist: addTracks(playlist)
											}),
										$author$project$Designer$Chart$EditingMeta(metaState))),
								$elm$core$Platform$Cmd$none);
					}
				} else {
					var error = res.a;
					return _Utils_Tuple2(
						_Utils_Tuple2(member, model),
						$elm$core$Platform$Cmd$none);
				}
			case 'GotTrack':
				var res = msg.a;
				if (res.$ === 'Ok') {
					var message = res.a.message;
					var track = res.a.track;
					if (state.$ === 'Requesting') {
						var prefix = $author$project$Configs$devMode ? 'http://localhost:3000' : '';
						var p = A2(
							$author$project$Components$Playlist$apply,
							$author$project$Components$Playlist$Add(
								_Utils_update(
									track,
									{
										filepath: _Utils_ap(prefix, track.filepath)
									})),
							playlist);
						return _Utils_Tuple2(
							_Utils_Tuple2(
								member,
								_Utils_Tuple2(
									_Utils_update(
										store,
										{playlist: p}),
									$author$project$Designer$Chart$Viewing)),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(
							_Utils_Tuple2(member, model),
							$elm$core$Platform$Cmd$none);
					}
				} else {
					var error = res.a;
					return _Utils_Tuple2(
						_Utils_Tuple2(member, model),
						$elm$core$Platform$Cmd$none);
				}
			case 'ReqTrack':
				var sendMeta = msg.a;
				var sendArcs = msg.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						member,
						_Utils_Tuple2(store, $author$project$Designer$Chart$Requesting)),
					$elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A4($author$project$Designer$Chart$reqTrack, member, sendMeta, sendArcs, onComplete),
								$author$project$Ports$scrollTo('#req-message')
							])));
			case 'Download':
				var path = msg.a;
				return _Utils_Tuple2(
					_Utils_Tuple2(member, model),
					$author$project$Configs$download(path));
			case 'UpdatePlaylist':
				var pMsg = msg.a;
				var next = function (p) {
					return A2($author$project$Components$Playlist$update, pMsg, p).a;
				};
				var cmdr = function (p) {
					return $elm$core$Platform$Cmd$none;
				};
				switch (state.$) {
					case 'Requesting':
						return _Utils_Tuple2(
							_Utils_Tuple2(
								member,
								_Utils_Tuple2(
									_Utils_update(
										store,
										{
											playlist: next(playlist)
										}),
									$author$project$Designer$Chart$Requesting)),
							cmdr(playlist));
					case 'Viewing':
						return _Utils_Tuple2(
							_Utils_Tuple2(
								member,
								_Utils_Tuple2(
									_Utils_update(
										store,
										{
											playlist: next(playlist)
										}),
									$author$project$Designer$Chart$Viewing)),
							cmdr(playlist));
					case 'EditingArc':
						var cardState = state.a;
						return _Utils_Tuple2(
							_Utils_Tuple2(
								member,
								_Utils_Tuple2(
									_Utils_update(
										store,
										{
											playlist: next(playlist)
										}),
									$author$project$Designer$Chart$EditingArc(cardState))),
							cmdr(playlist));
					default:
						var metaState = state.a;
						return _Utils_Tuple2(
							_Utils_Tuple2(
								member,
								_Utils_Tuple2(
									_Utils_update(
										store,
										{
											playlist: next(playlist)
										}),
									$author$project$Designer$Chart$EditingMeta(metaState))),
							cmdr(playlist));
				}
			default:
				return _Utils_Tuple2(
					_Utils_Tuple2(
						member,
						A2(
							$author$project$Designer$Chart$apply,
							msg,
							_Utils_Tuple2(member, model))),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Arc$SetSize = function (a) {
	return {$: 'SetSize', a: a};
};
var $author$project$Arc$SetStyle = function (a) {
	return {$: 'SetStyle', a: a};
};
var $author$project$Arc$SetTitle = function (a) {
	return {$: 'SetTitle', a: a};
};
var $elm$html$Html$b = _VirtualDom_node('b');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$html$Html$h5 = _VirtualDom_node('h5');
var $author$project$Components$editTextDesktop = F4(
	function (title, html, val, toMsg) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h5,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('subtitle')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$label,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(title)
								]))
						])),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('text'),
							$elm$html$Html$Attributes$class('input my-3 is-info'),
							$elm$html$Html$Attributes$value(val),
							$elm$html$Html$Events$onInput(toMsg)
						]),
					_List_Nil),
					html
				]));
	});
var $author$project$Components$editTextMobile = F4(
	function (title, html, val, toMsg) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('is-size-2-touch is-size-2-mobile')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(title)
						])),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('text'),
							$elm$html$Html$Attributes$class('input my-3 is-info'),
							$elm$html$Html$Attributes$value(val),
							$elm$html$Html$Events$onInput(toMsg)
						]),
					_List_Nil),
					html
				]));
	});
var $author$project$Components$tabletOnly = function (child) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('is-hidden-mobile is-hidden-desktop')
			]),
		_List_fromArray(
			[child]));
};
var $author$project$Components$editText = F4(
	function (title, html, val, toMsg) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					$author$project$Components$mobileOnly(
					A4($author$project$Components$editTextMobile, title, html, val, toMsg)),
					$author$project$Components$tabletOnly(
					A4($author$project$Components$editTextDesktop, title, html, val, toMsg)),
					$author$project$Components$desktopOnly(
					A4($author$project$Components$editTextDesktop, title, html, val, toMsg))
				]));
	});
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $author$project$Components$pickerSelected = F4(
	function (things, pic, select, current) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('columns is-multiline level is-vcentered')
				]),
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (i, thing) {
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									_Utils_eq(thing, current) ? 'chosen' : ''),
									$elm$html$Html$Attributes$class('column is-vcentered has-text-centered'),
									$elm$html$Html$Events$onClick(
									select(i))
								]),
							_List_fromArray(
								[
									pic(thing)
								]));
					}),
				things));
	});
var $author$project$Arc$sizeLabel = function (size) {
	switch (size) {
		case 3:
			return 'Short';
		case 4:
			return 'Medium';
		case 5:
			return 'Long';
		default:
			return '? mystery size ?';
	}
};
var $author$project$Arc$sizes = _List_fromArray(
	[3, 4, 5]);
var $author$project$Arc$styleInfo = function (style) {
	switch (style.$) {
		case 'Beat':
			return 'Only percussive parts, like kick drum, hi hats, clap, and snare drum';
		case 'Groove':
			return 'Mostly percussion with some chance of synth parts';
		case 'Mix':
			return 'An equal chance of percussion and synth parts';
		case 'Instrumental':
			return 'Mostly synths with some chance of percussive parts';
		default:
			return 'Only synths, like bass, chords, and melody.';
	}
};
var $author$project$Arc$Instrumental = {$: 'Instrumental'};
var $author$project$Arc$styles = _List_fromArray(
	[$author$project$Arc$Beat, $author$project$Arc$Groove, $author$project$Arc$Mix, $author$project$Arc$Instrumental, $author$project$Arc$Abstract]);
var $author$project$Arc$editor = F4(
	function (arc, change, save, cancel) {
		var selectStyle = function (_int) {
			return change(
				$author$project$Arc$SetStyle(
					A3($author$project$Tools$getOr, _int, $author$project$Arc$styles, $author$project$Arc$Mix)));
		};
		return $author$project$Components$box(
			_List_fromArray(
				[
					A4(
					$author$project$Components$editText,
					'Title',
					$elm$html$Html$text(''),
					arc.title,
					function (str) {
						return change(
							$author$project$Arc$SetTitle(str));
					}),
					A2(
					$elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Size')
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('How long this section of music is.')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('my-6')
						]),
					$elm$core$List$singleton(
						A4(
							$author$project$Components$pickerSelected,
							$author$project$Arc$sizes,
							A2($elm$core$Basics$composeL, $elm$html$Html$text, $author$project$Arc$sizeLabel),
							function (_int) {
								return change(
									$author$project$Arc$SetSize(
										A3($author$project$Tools$getOr, _int, $author$project$Arc$sizes, 3)));
							},
							arc.size))),
					A2(
					$elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Mix')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('my-6')
						]),
					$elm$core$List$singleton(
						A4(
							$author$project$Components$pickerSelected,
							$author$project$Arc$styles,
							A2($elm$core$Basics$composeL, $elm$html$Html$text, $author$project$Arc$styleLabel),
							selectStyle,
							arc.style))),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('w-100')
						]),
					$elm$core$List$singleton(
						A2(
							$elm$html$Html$b,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('is-block has-text-centered content')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Arc$styleInfo(arc.style))
								])))),
					A3(
					$author$project$Components$button,
					save,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('mr-3')
						]),
					'Save changes'),
					A3($author$project$Components$button, cancel, _List_Nil, 'Cancel')
				]));
	});
var $elm$html$Html$br = _VirtualDom_node('br');
var $author$project$Configs$cardWidth = 240;
var $elm$core$String$fromFloat = _String_fromNumber;
var $author$project$Arc$thumb = function (_v0) {
	var title = _v0.title;
	var style = _v0.style;
	var size = _v0.size;
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('box'),
				A2(
				$elm$html$Html$Attributes$style,
				'min-width',
				$elm$core$String$fromFloat($author$project$Configs$cardWidth) + 'px')
			]),
		_List_fromArray(
			[
				$author$project$Components$label(title),
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('mt-3')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Arc$sizeLabel(size) + (' ' + $author$project$Arc$styleLabel(style)))
					]))
			]));
};
var $author$project$Components$Group$uniques = function (els) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (a, u) {
				return A2($elm$core$List$member, a, u) ? u : _Utils_ap(
					u,
					_List_fromArray(
						[a]));
			}),
		_List_Nil,
		els);
};
var $author$project$Designer$Chart$showUniques = function (arcs) {
	var uniques = $author$project$Components$Group$uniques(arcs);
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('columns is-multiline d-flex is-justify-content-center')
					]),
				A2(
					$elm$core$List$map,
					function (arc) {
						var count = A3(
							$elm$core$List$foldl,
							F2(
								function (a, sum) {
									return _Utils_eq(a, arc) ? (sum + 1) : sum;
								}),
							0,
							arcs);
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('column is-narrow')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$elm$core$String$fromInt(count) + 'x'),
									$author$project$Arc$thumb(arc)
								]));
					},
					uniques)),
				(!_Utils_eq(
				$elm$core$List$length(uniques),
				$elm$core$List$length(arcs))) ? A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('mt-3 mb-6 p-3 has-background-success-light has-text-centered')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('When you have two identical Arcs (the title, size, and style all match),'),
						A2($elm$html$Html$br, _List_Nil, _List_Nil),
						$elm$html$Html$text('then the music for that Arc will be the same everywhere it is found in the Layout.')
					])) : $elm$html$Html$text('')
			]));
};
var $author$project$Designer$Chart$arcSummary = function (arcs) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				$author$project$Designer$Chart$showUniques(arcs)
			]));
};
var $elm$html$Html$details = _VirtualDom_node('details');
var $author$project$Arc$empty = A3($author$project$Arc$Model, 'New Arc', 4, $author$project$Arc$Mix);
var $author$project$Components$Group$Delete = function (a) {
	return {$: 'Delete', a: a};
};
var $author$project$Components$Group$InsertAt = F2(
	function (a, b) {
		return {$: 'InsertAt', a: a, b: b};
	});
var $author$project$Components$Group$MoveTo = F3(
	function (a, b, c) {
		return {$: 'MoveTo', a: a, b: b, c: c};
	});
var $author$project$Components$Group$inserter = F4(
	function (revise, newEl, thumb, things) {
		var adder = function (i) {
			var insert = revise(
				A2($author$project$Components$Group$InsertAt, i, newEl));
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class(' is-flex is-flex-direction-column is-justify-content-center my-6 mx-3')
					]),
				_List_fromArray(
					[
						A3(
						$author$project$Components$button,
						insert,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('is-size-4 has-text-info')
							]),
						'+')
					]));
		};
		var withActions = F2(
			function (i, el) {
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('is-flex is-flex-direction-row')
						]),
					_List_fromArray(
						[
							adder(i),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('box my-6 mx-3 column has-text-centered')
								]),
							_List_fromArray(
								[
									A2(thumb, i, el),
									$author$project$Components$colsMulti(
									A2(
										$elm$core$List$map,
										$author$project$Components$colHalf,
										_List_fromArray(
											[
												(i > 0) ? A3(
												$author$project$Components$button,
												revise(
													A3($author$project$Components$Group$MoveTo, el, i, i - 1)),
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('is-fullwidth')
													]),
												'Move left') : $elm$html$Html$text(''),
												(_Utils_cmp(
												i,
												(-1) + $elm$core$List$length(things)) < 0) ? A3(
												$author$project$Components$button,
												revise(
													A3($author$project$Components$Group$MoveTo, el, i, i + 1)),
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('is-fullwidth')
													]),
												'Move right') : $elm$html$Html$text(''),
												A3(
												$author$project$Components$button,
												revise(
													A2($author$project$Components$Group$InsertAt, i + 1, el)),
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('is-fullwidth has-text-white has-background-success ')
													]),
												'Duplicate'),
												A3(
												$author$project$Components$button,
												revise(
													$author$project$Components$Group$Delete(i)),
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('is-fullwidth has-text-white has-background-danger ')
													]),
												'Delete Arc ' + $elm$core$String$fromInt(i + 1))
											])))
								])),
							_Utils_eq(
							i,
							$elm$core$List$length(things) - 1) ? adder(i + 1) : $elm$html$Html$text('')
						]));
			});
		return (!$elm$core$List$length(things)) ? adder(0) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('scroll-horizontal-parent')
				]),
			$elm$core$List$singleton(
				A2(
					$author$project$Components$colsWith,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('is-vcentered scroll-horizontal-child')
						]),
					A2($elm$core$List$indexedMap, withActions, things))));
	});
var $elm$core$Basics$pow = _Basics_pow;
var $author$project$Data$flats = _List_fromArray(
	['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']);
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Data$indexedFlats = A3(
	$elm$core$List$map2,
	$elm$core$Tuple$pair,
	A2($elm$core$List$range, 0, 11),
	$author$project$Data$flats);
var $author$project$Data$sharps = _List_fromArray(
	['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']);
var $author$project$Data$indexedSharps = A3(
	$elm$core$List$map2,
	$elm$core$Tuple$pair,
	A2($elm$core$List$range, 0, 11),
	$author$project$Data$sharps);
var $author$project$Components$keys = function (useSharps) {
	return useSharps ? $author$project$Data$indexedSharps : $author$project$Data$indexedFlats;
};
var $author$project$Components$keyMessage = F2(
	function (useSharps, root) {
		var _v0 = A3(
			$author$project$Tools$getOr,
			root,
			$author$project$Components$keys(useSharps),
			_Utils_Tuple2(0, 'mysterious'));
		var tonic = _v0.b;
		return 'Key of ' + tonic;
	});
var $author$project$ScoreMeta$duration = F3(
	function (cps, cpc, nCycles) {
		return (cpc * (1 / cps)) * nCycles;
	});
var $author$project$ScoreMeta$maxDuration = 5 * 60.0;
var $author$project$ScoreMeta$tempoMessage = F3(
	function (cpc, cps, nCycles) {
		var dur = A3($author$project$ScoreMeta$duration, cps, cpc, nCycles);
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$View$timeString(dur))
						])),
					(_Utils_cmp(dur, $author$project$ScoreMeta$maxDuration) < 0) ? $elm$html$Html$text('') : A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Synthony currently supports songs up to 5 minutes in length. You can make a layout that looks longer than that, but the song writer will shorten it to fit into the 5 minute range.')
						]))
				]));
	});
var $author$project$ScoreMeta$useSharps = false;
var $author$project$ScoreMeta$readonly = F3(
	function (nCycles, meta, revise) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('box m-auto'),
					A2($elm$html$Html$Attributes$style, 'width', '360px')
				]),
			_List_fromArray(
				[
					$author$project$Components$label(meta.title),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							A2($author$project$Components$keyMessage, $author$project$ScoreMeta$useSharps, meta.key))
						])),
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromFloat(meta.bpm) + ' Beats Per Minute')
						])),
					A3($author$project$ScoreMeta$tempoMessage, meta.cpc, meta.bpm / 60, nCycles),
					A3(
					$author$project$Components$button,
					revise,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('mt-3')
						]),
					'Edit Details')
				]));
	});
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $author$project$Designer$Chart$showSequence = function (arcs) {
	var separator = '  ->   ';
	var seq = A3(
		$elm$core$List$foldl,
		F2(
			function (arc, chain) {
				return _Utils_ap(
					chain,
					_Utils_ap(arc.title, separator));
			}),
		'',
		arcs);
	var show = A2(
		$elm$core$String$dropRight,
		$elm$core$String$length(separator),
		seq);
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('px-3 my-3 has-text-centered')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(show)
			]));
};
var $author$project$Arc$stub = F2(
	function (_v0, click) {
		var title = _v0.title;
		var style = _v0.style;
		var size = _v0.size;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('box'),
					A2(
					$elm$html$Html$Attributes$style,
					'min-width',
					$elm$core$String$fromFloat($author$project$Configs$cardWidth) + 'px')
				]),
			_List_fromArray(
				[
					$author$project$Components$label(title),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('mt-3')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$author$project$Arc$sizeLabel(size) + (' ' + $author$project$Arc$styleLabel(style)))
						])),
					A3(
					$author$project$Components$button,
					click,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('my-3')
						]),
					'Edit Arc')
				]));
	});
var $elm$html$Html$summary = _VirtualDom_node('summary');
var $author$project$Designer$Chart$editor = function (anon) {
	return function (isUsable) {
		return function (playlist) {
			return function (updatePlaylist) {
				return function (download) {
					return function (meta) {
						return function (editMeta) {
							return function (editGroup) {
								return function (openArc) {
									return function (arcs) {
										return function (doRequest) {
											return function (changeTrack) {
												var nCycles = A3(
													$elm$core$List$foldl,
													F2(
														function (card, sum) {
															return sum + A2($elm$core$Basics$pow, 2, card.size);
														}),
													0,
													arcs);
												return A2(
													$author$project$Components$boxWith,
													isUsable ? '' : 'overlay-disabled',
													_List_fromArray(
														[
															A2(
															$elm$html$Html$label,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('is-size-3 is-block mt-3 mb-6')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('Title, BPM and Color')
																])),
															A3($author$project$ScoreMeta$readonly, nCycles, meta, editMeta),
															A2(
															$elm$html$Html$label,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('is-size-3 is-block my-6')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('Layout')
																])),
															A2(
															$elm$html$Html$details,
															_List_Nil,
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$summary,
																	_List_fromArray(
																		[
																			$elm$html$Html$Attributes$class('is-size-5')
																		]),
																	_List_fromArray(
																		[
																			$elm$html$Html$text('Show Summary')
																		])),
																	$author$project$Designer$Chart$arcSummary(arcs)
																])),
															A2(
															$elm$html$Html$p,
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('mt-3 mb-6')
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text('Use the buttons below to add, edit, remove, and position your Arcs.')
																])),
															$author$project$Designer$Chart$showSequence(arcs),
															A4(
															$author$project$Components$Group$inserter,
															editGroup,
															$author$project$Arc$empty,
															F2(
																function (i, c) {
																	return A2(
																		$author$project$Arc$stub,
																		c,
																		openArc(c));
																}),
															arcs),
															isUsable ? ((($elm$core$List$length(arcs) > 0) && isUsable) ? A3(
															$author$project$Components$button,
															A2(doRequest, meta, arcs),
															_List_fromArray(
																[
																	$elm$html$Html$Attributes$class('mt-6 mb-3')
																]),
															'Make a Song') : A2(
															$elm$html$Html$p,
															_List_Nil,
															_List_fromArray(
																[
																	$elm$html$Html$text('When you have at least 1 Arc in your layout, you can press the \"Make a Song\" button to produce the new music.')
																]))) : $elm$html$Html$text('')
														]));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $author$project$ScoreMeta$SetBpm = function (a) {
	return {$: 'SetBpm', a: a};
};
var $author$project$ScoreMeta$SetKey = function (a) {
	return {$: 'SetKey', a: a};
};
var $author$project$ScoreMeta$SetTitle = function (a) {
	return {$: 'SetTitle', a: a};
};
var $author$project$Components$editRangeString = F5(
	function (title, html, _v0, val, update) {
		var mn = _v0.a;
		var mx = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('box level')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('columns is-multiline')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('column is-full level is-flex is-justify-content-space-around')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$label,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('m-0 subtitle')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(title)
										])),
									A2(
									$elm$html$Html$input,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$type_('text'),
											$elm$html$Html$Events$onInput(update),
											$elm$html$Html$Attributes$class('m-0'),
											$elm$html$Html$Attributes$value(val)
										]),
									_List_Nil)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('column')
								]),
							_List_fromArray(
								[html]))
						]))
				]));
	});
var $author$project$Components$keyButtonDesktop = F4(
	function (name, curr, toMsg, val) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick(
					toMsg(val)),
					$elm$html$Html$Attributes$class(
					_Utils_eq(curr, val) ? 'is-success is-selected' : ''),
					$elm$html$Html$Attributes$class('column is-3 button p-0')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(name)
				]));
	});
var $author$project$Components$keyPickerDesktop = F3(
	function (useSharps, val, toMsg) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('')
				]),
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h5,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('subtitle')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Key')
							]))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('columns is-multiline')
							]),
						A2(
							$elm$core$List$map,
							function (_v0) {
								var v = _v0.a;
								var name = _v0.b;
								return A4($author$project$Components$keyButtonDesktop, name, val, toMsg, v);
							},
							useSharps ? $author$project$Data$indexedSharps : $author$project$Data$indexedFlats))
					])));
	});
var $author$project$Components$keyPickerMobile = F3(
	function (useSharps, val, toMsg) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('key-picker-mobile')
				]),
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h5,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('subtitle')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Key')
							]))
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('columns is-multiline is-mobile')
							]),
						A2(
							$elm$core$List$map,
							function (_v0) {
								var v = _v0.a;
								var name = _v0.b;
								return A4($author$project$Components$keyButtonDesktop, name, val, toMsg, v);
							},
							useSharps ? $author$project$Data$indexedSharps : $author$project$Data$indexedFlats))
					])));
	});
var $author$project$Components$keyPickerFull = F3(
	function (useSharps, val, toMsg) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('box')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('is-hidden-tablet')
						]),
					_List_fromArray(
						[
							A3($author$project$Components$keyPickerMobile, useSharps, val, toMsg)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('is-hidden-mobile')
						]),
					_List_fromArray(
						[
							A3($author$project$Components$keyPickerDesktop, useSharps, val, toMsg)
						]))
				]));
	});
var $author$project$ScoreMeta$editor = F4(
	function (meta, change, save, cancel) {
		return $author$project$Components$box(
			_List_fromArray(
				[
					A4(
					$author$project$Components$editText,
					'Title',
					$elm$html$Html$text(''),
					meta.title,
					function (str) {
						return change(
							$author$project$ScoreMeta$SetTitle(str));
					}),
					A5(
					$author$project$Components$editRangeString,
					'BPM',
					$elm$html$Html$text('Enter a BPM between 44 and 180.'),
					_Utils_Tuple2($author$project$ScoreMeta$bpmMin, $author$project$ScoreMeta$bpmMax),
					meta.tempo,
					function (str) {
						return change(
							$author$project$ScoreMeta$SetBpm(str));
					}),
					A3(
					$author$project$Components$keyPickerFull,
					$author$project$ScoreMeta$useSharps,
					meta.key,
					function (_int) {
						return change(
							$author$project$ScoreMeta$SetKey(_int));
					}),
					A3(
					$author$project$Components$button,
					save,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('mr-3')
						]),
					'Save changes'),
					A3($author$project$Components$button, cancel, _List_Nil, 'Cancel')
				]));
	});
var $author$project$Designer$Chart$isAnon = function (member) {
	return _Utils_eq(member, $author$project$Configs$anonMember);
};
var $author$project$Arc$readonly = F3(
	function (arc, revise, done) {
		return $author$project$Components$box(
			_List_fromArray(
				[
					$author$project$Components$label(arc.title),
					A3($author$project$Components$button, revise, _List_Nil, 'Edit'),
					A3($author$project$Components$button, done, _List_Nil, 'Return')
				]));
	});
var $author$project$Components$Player$Load = function (a) {
	return {$: 'Load', a: a};
};
var $author$project$Components$Player$Pause = {$: 'Pause'};
var $author$project$Components$Player$Play = {$: 'Play'};
var $author$project$Components$Player$Stop = {$: 'Stop'};
var $elm$html$Html$footer = _VirtualDom_node('footer');
var $author$project$Components$card3 = F3(
	function (head, body, feet) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('card')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('card-header')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('card-header-title')
								]),
							_List_fromArray(
								[head]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('card-content')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('content')
								]),
							_List_fromArray(
								[body]))
						])),
					A2(
					$elm$html$Html$footer,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('card-footer')
						]),
					A2(
						$elm$core$List$map,
						function (el) {
							return A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('card-footer-item')
									]),
								_List_fromArray(
									[el]));
						},
						feet))
				]));
	});
var $author$project$Tools$timeString = function (t) {
	var s = A2(
		$elm$core$Basics$modBy,
		60,
		$elm$core$Basics$round(t));
	var pad2 = (s < 10) ? '0' : '';
	var ss = _Utils_ap(
		pad2,
		$elm$core$String$fromInt(s));
	var m = ($elm$core$Basics$round(t) / 60) | 0;
	var pad = (m < 10) ? '0' : '';
	var mm = _Utils_ap(
		pad,
		$elm$core$String$fromInt(m));
	return mm + (':' + ss);
};
var $author$project$Components$Playlist$card = F6(
	function (isAnon, index, state, change, track, download) {
		var filepath = track.filepath;
		var title = track.title;
		var dlButton = isAnon ? A2($author$project$Components$buttonDisabled, _List_Nil, 'Download') : $author$project$Components$col1(
			A3(
				$author$project$Components$button,
				download(track.filepath),
				_List_Nil,
				'Download'));
		var control = function () {
			switch (state.$) {
				case 'Playing':
					return A3(
						$author$project$Components$button,
						A2(change, index, $author$project$Components$Player$Pause),
						_List_Nil,
						'Pause');
				case 'Paused':
					return A3(
						$author$project$Components$button,
						A2(change, index, $author$project$Components$Player$Play),
						_List_Nil,
						'Play');
				case 'Loading':
					return A3(
						$author$project$Components$button,
						A2(change, index, $author$project$Components$Player$Stop),
						_List_Nil,
						'Cancel');
				default:
					return A3(
						$author$project$Components$button,
						A2(
							change,
							index,
							$author$project$Components$Player$Load(track)),
						_List_Nil,
						'Play');
			}
		}();
		var buttons = _List_fromArray(
			[control, dlButton]);
		var body = A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(
							$author$project$Components$Playlist$id(index))
						]),
					_List_Nil),
					function () {
					if (state.$ === 'Loading') {
						return $elm$html$Html$text('Loading your track');
					} else {
						return A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('content has-text-centered')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(
									$author$project$Tools$timeString(track.duration_seconds))
								]));
					}
				}()
				]));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('column is-half')
				]),
			_List_fromArray(
				[
					A3(
					$author$project$Components$card3,
					$elm$html$Html$text(title),
					body,
					buttons)
				]));
	});
var $author$project$Components$Playlist$regCta = A2(
	$elm$html$Html$p,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class(' mb-3')
		]),
	_List_fromArray(
		[
			$elm$html$Html$text('To download these songs and keep them as your own, log into your account. Every song you make while logged is yours. You can anything you want with it! We do not claim any rights, license, or ownership over the songs you make.')
		]));
var $author$project$Components$Playlist$termsCta = A2(
	$elm$html$Html$p,
	_List_Nil,
	_List_fromArray(
		[
			$elm$html$Html$text('Those terms are described in more detail '),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href(
					$author$project$Configs$selfUrl('terms-of-service'))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('here')
				])),
			$elm$html$Html$text('.')
		]));
var $author$project$Components$Playlist$playlist = F3(
	function (isAnon, model, download) {
		return $author$project$Components$box(
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h2,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('title mt-6')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('My Music')
						])),
					isAnon ? $author$project$Components$Playlist$regCta : $elm$html$Html$text(''),
					isAnon ? $author$project$Components$Playlist$termsCta : $elm$html$Html$text('')
				]));
	});
var $author$project$Components$Playlist$view = F5(
	function (isAnon, model, updatePlaylist, download, _do) {
		var players = model.a;
		var tracks = model.b;
		if ($elm$core$List$length(tracks) > 0) {
			var pairs = A3($elm$core$List$map2, $elm$core$Tuple$pair, players, tracks);
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$author$project$Components$cols(
						_List_fromArray(
							[
								$author$project$Components$col1(
								A3($author$project$Components$Playlist$playlist, isAnon, model, download))
							])),
						A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('show-on-mobile')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('On mobile? Make sure your mute switch is off and the volume is up.')
							])),
						$author$project$Components$colsMulti(
						A2(
							$elm$core$List$indexedMap,
							F2(
								function (i, _v0) {
									var state = _v0.a;
									var track = _v0.b;
									return A6($author$project$Components$Playlist$card, isAnon, i, state.b, _do, track, download);
								}),
							pairs))
					]));
		} else {
			return A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Make a song to start your collection.')
					]));
		}
	});
var $author$project$Designer$Chart$allTheDetails = _List_fromArray(
	[
		A2(
		$elm$html$Html$details,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$summary,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
						$elm$html$Html$Attributes$class('is-size-4')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('What are Song Details?')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('m-3')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('No matter what, ALL music contains these two things in common: It moves through time, and occupies space! ')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('To measure time we use Beats Per Minute. A higher number means the song will sound faster, while lower numbers sound slower.')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('The space a song fills is determined by its key signature. That\'s a term musicians use to describe which notes to choose from. We just call it \"color.\" Let\'s use actual colors for a comparison.')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Yellow, purple, blue, orange, red, and green are great colors and each one is about equal to the others.')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('When listening to music, the same idea is true for all 12 keys.')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Making songs in a different keys is the fastest way to get a wide variety of results.')
							]))
					]))
			])),
		A2(
		$elm$html$Html$details,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$summary,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
						$elm$html$Html$Attributes$class('is-size-4')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('What is a Layout?')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('m-3')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Most music has a few distinct sections that get used over and over and over again. We call each of these sections an \"Arc.\" The sequence of Arcs, from beginning to end, is the Layout.')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Think about a song that has a verse-chorus-verse pattern. It might have all of these arcs in this order: intro, verse, chorus, verse, chorus, chorus, verse, outro. So it has four unique arcs: intro, verse, chorus, and outro.')
							]))
					]))
			])),
		A2(
		$elm$html$Html$details,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$summary,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
						$elm$html$Html$Attributes$class('is-size-4')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Glossary')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('m-3')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('The words we use to make songs, and what they mean.')
							])),
						A2(
						$elm$html$Html$h3,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Song Details')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Information about the song as a whole. These options are used on all of the song, not just individual arcs.')
							])),
						A2(
						$elm$html$Html$b,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Title')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('The name of your song. It does not affect the music.')
							])),
						A2(
						$elm$html$Html$b,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('BPM')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Beats Per Minute (BPM)'),
								$elm$html$Html$text('The speed of the song.')
							])),
						A2(
						$elm$html$Html$b,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Key')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('The key signature of the song.')
							])),
						A2(
						$elm$html$Html$h3,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Arc')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Information for this specific section of music.')
							])),
						A2(
						$elm$html$Html$b,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Title')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('A label to help you remember what this Arc is. It does not affect the music.')
							])),
						A2(
						$elm$html$Html$b,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Size')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('How long this Arc is.')
							])),
						A2(
						$elm$html$Html$b,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Mix')
							])),
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('The instruments (beat or synths) that should go in this Arc.')
							]))
					]))
			]))
	]);
var $author$project$Designer$Chart$welcome = A2(
	$elm$html$Html$div,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('content')
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Hi! I\'m your Layout Designer. You can use me to build the layout of your song.')
				])),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('p-3')
				]),
			$author$project$Designer$Chart$allTheDetails)
		]));
var $author$project$Designer$Chart$view = function (_v0) {
	return function (updatePlaylist) {
		return function (download) {
			return function (editMeta) {
				return function (changeMeta) {
					return function (saveMeta) {
						return function (closeMeta) {
							return function (openArc) {
								return function (editArc) {
									return function (change) {
										return function (save) {
											return function (cancel) {
												return function (createArc) {
													return function (editGroup) {
														return function (doRequest) {
															return function (changeTrack) {
																var member = _v0.a;
																var model = _v0.b;
																var store = model.a;
																var playlist = store.playlist;
																var meta = store.meta;
																var arcs = store.arcs;
																var state = model.b;
																return A2(
																	$elm$html$Html$div,
																	_List_Nil,
																	_List_fromArray(
																		[
																			$author$project$Designer$Chart$welcome,
																			A2(
																			$elm$html$Html$h2,
																			_List_fromArray(
																				[
																					$elm$html$Html$Attributes$class('is-size-2 my-6')
																				]),
																			_List_fromArray(
																				[
																					$elm$html$Html$text('Layout Designer')
																				])),
																			function () {
																			switch (state.$) {
																				case 'Requesting':
																					return A2(
																						$elm$html$Html$div,
																						_List_Nil,
																						_List_fromArray(
																							[
																								$author$project$Designer$Chart$editor(
																								$author$project$Designer$Chart$isAnon(member))(false)(playlist)(updatePlaylist)(download)(meta)(editMeta)(editGroup)(openArc)(arcs.b)(doRequest)(changeTrack),
																								A2(
																								$elm$html$Html$p,
																								_List_fromArray(
																									[
																										$elm$html$Html$Attributes$id('req-message'),
																										$elm$html$Html$Attributes$class('p-3 bg-info')
																									]),
																								_List_fromArray(
																									[
																										$elm$html$Html$text('Writing a song for you!')
																									])),
																								A2(
																								$elm$html$Html$p,
																								_List_fromArray(
																									[
																										$elm$html$Html$Attributes$class('p-3 bg-info')
																									]),
																								_List_fromArray(
																									[
																										$elm$html$Html$text('This can take up to one minute.')
																									])),
																								A2(
																								$elm$html$Html$p,
																								_List_fromArray(
																									[
																										$elm$html$Html$Attributes$class('p-3 bg-info wait-a-minute')
																									]),
																								_List_fromArray(
																									[
																										$elm$html$Html$text('Looks like this song is taking longer; or maybe you lost network connection? Please try reloading the page, or contact us to report the issue.')
																									]))
																							]));
																				case 'Viewing':
																					return $author$project$Designer$Chart$editor(
																						$author$project$Designer$Chart$isAnon(member))(true)(playlist)(updatePlaylist)(download)(meta)(editMeta)(editGroup)(openArc)(arcs.b)(doRequest)(changeTrack);
																				case 'EditingArc':
																					var arcState = state.a;
																					if (arcState.$ === 'Viewing') {
																						var card = arcState.a;
																						return A3(
																							$author$project$Arc$readonly,
																							card,
																							editArc(card),
																							cancel);
																					} else {
																						var orig = arcState.a;
																						var next = arcState.b;
																						return A4(
																							$author$project$Arc$editor,
																							next,
																							change,
																							save(next),
																							cancel);
																					}
																				default:
																					var metaState = state.a;
																					if (metaState.$ === 'Editing') {
																						var prev = metaState.a;
																						var next = metaState.b;
																						return A4(
																							$author$project$ScoreMeta$editor,
																							next,
																							changeMeta,
																							saveMeta(next),
																							closeMeta);
																					} else {
																						return $elm$html$Html$text('How did you get here? Please tell us on the Contact page.');
																					}
																			}
																		}(),
																			A5(
																			$author$project$Components$Playlist$view,
																			$author$project$Designer$Chart$isAnon(member),
																			playlist,
																			updatePlaylist,
																			download,
																			changeTrack)
																		]));
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $author$project$Designer$Chart$main = $elm$browser$Browser$element(
	{
		init: function (flags) {
			return A2($author$project$Designer$Chart$init, flags, $author$project$Designer$Chart$GotTracks);
		},
		subscriptions: $author$project$Designer$Chart$subscriptions,
		update: F2(
			function (msg, model) {
				return A3($author$project$Designer$Chart$update, msg, model, $author$project$Designer$Chart$GotTrack);
			}),
		view: function (_v0) {
			var member = _v0.a;
			var model = _v0.b;
			return $author$project$Designer$Chart$view(
				_Utils_Tuple2(member, model))($author$project$Designer$Chart$UpdatePlaylist)($author$project$Designer$Chart$Download)($author$project$Designer$Chart$EditMeta)($author$project$Designer$Chart$UpdateMeta)($author$project$Designer$Chart$SaveMeta)($author$project$Designer$Chart$CloseMeta)($author$project$Designer$Chart$ViewArc)($author$project$Designer$Chart$EditArc)($author$project$Designer$Chart$UpdateArc)($author$project$Designer$Chart$SaveArc)($author$project$Designer$Chart$CloseArc)($author$project$Designer$Chart$CreateArc)($author$project$Designer$Chart$EditGroup)($author$project$Designer$Chart$ReqTrack)($author$project$Designer$Chart$ChangeTrack);
		}
	});
var $author$project$Main$main = $author$project$Designer$Chart$main;
_Platform_export({'Designer':{'Chart':{'init':$author$project$Designer$Chart$main(
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2(
				$elm$json$Json$Decode$map,
				$elm$core$Maybe$Just,
				A2(
					$elm$json$Json$Decode$andThen,
					function (uuid) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (subscriptions) {
								return A2(
									$elm$json$Json$Decode$andThen,
									function (subscribed) {
										return A2(
											$elm$json$Json$Decode$andThen,
											function (paid) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (name) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (firstname) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (email) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (avatar_image) {
																				return $elm$json$Json$Decode$succeed(
																					{avatar_image: avatar_image, email: email, firstname: firstname, name: name, paid: paid, subscribed: subscribed, subscriptions: subscriptions, uuid: uuid});
																			},
																			A2($elm$json$Json$Decode$field, 'avatar_image', $elm$json$Json$Decode$string));
																	},
																	A2($elm$json$Json$Decode$field, 'email', $elm$json$Json$Decode$string));
															},
															A2($elm$json$Json$Decode$field, 'firstname', $elm$json$Json$Decode$string));
													},
													A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string));
											},
											A2($elm$json$Json$Decode$field, 'paid', $elm$json$Json$Decode$bool));
									},
									A2($elm$json$Json$Decode$field, 'subscribed', $elm$json$Json$Decode$bool));
							},
							A2(
								$elm$json$Json$Decode$field,
								'subscriptions',
								$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
					},
					A2($elm$json$Json$Decode$field, 'uuid', $elm$json$Json$Decode$string)))
			])))(0)}},'MiniMaker':{'init':$author$project$MiniMaker$main(
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2(
				$elm$json$Json$Decode$map,
				$elm$core$Maybe$Just,
				A2(
					$elm$json$Json$Decode$andThen,
					function (uuid) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (subscriptions) {
								return A2(
									$elm$json$Json$Decode$andThen,
									function (subscribed) {
										return A2(
											$elm$json$Json$Decode$andThen,
											function (paid) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (name) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (firstname) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (email) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (avatar_image) {
																				return $elm$json$Json$Decode$succeed(
																					{avatar_image: avatar_image, email: email, firstname: firstname, name: name, paid: paid, subscribed: subscribed, subscriptions: subscriptions, uuid: uuid});
																			},
																			A2($elm$json$Json$Decode$field, 'avatar_image', $elm$json$Json$Decode$string));
																	},
																	A2($elm$json$Json$Decode$field, 'email', $elm$json$Json$Decode$string));
															},
															A2($elm$json$Json$Decode$field, 'firstname', $elm$json$Json$Decode$string));
													},
													A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string));
											},
											A2($elm$json$Json$Decode$field, 'paid', $elm$json$Json$Decode$bool));
									},
									A2($elm$json$Json$Decode$field, 'subscribed', $elm$json$Json$Decode$bool));
							},
							A2(
								$elm$json$Json$Decode$field,
								'subscriptions',
								$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
					},
					A2($elm$json$Json$Decode$field, 'uuid', $elm$json$Json$Decode$string)))
			])))(0)},'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2(
				$elm$json$Json$Decode$map,
				$elm$core$Maybe$Just,
				A2(
					$elm$json$Json$Decode$andThen,
					function (uuid) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (subscriptions) {
								return A2(
									$elm$json$Json$Decode$andThen,
									function (subscribed) {
										return A2(
											$elm$json$Json$Decode$andThen,
											function (paid) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (name) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (firstname) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (email) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (avatar_image) {
																				return $elm$json$Json$Decode$succeed(
																					{avatar_image: avatar_image, email: email, firstname: firstname, name: name, paid: paid, subscribed: subscribed, subscriptions: subscriptions, uuid: uuid});
																			},
																			A2($elm$json$Json$Decode$field, 'avatar_image', $elm$json$Json$Decode$string));
																	},
																	A2($elm$json$Json$Decode$field, 'email', $elm$json$Json$Decode$string));
															},
															A2($elm$json$Json$Decode$field, 'firstname', $elm$json$Json$Decode$string));
													},
													A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string));
											},
											A2($elm$json$Json$Decode$field, 'paid', $elm$json$Json$Decode$bool));
									},
									A2($elm$json$Json$Decode$field, 'subscribed', $elm$json$Json$Decode$bool));
							},
							A2(
								$elm$json$Json$Decode$field,
								'subscriptions',
								$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
					},
					A2($elm$json$Json$Decode$field, 'uuid', $elm$json$Json$Decode$string)))
			])))(0)}});}(this));