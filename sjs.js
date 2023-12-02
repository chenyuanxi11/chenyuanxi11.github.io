class JSExtension {
	getInfo() {
		return {
			id: 'sjsex',
			name: 'JavaScript 原生扩展',
			color1: '#cfcfcf',
			blocks: [
				{
					opcode: 'unsafe_eval',
					blockType: Scratch.BlockType.COMMAND,
					text: '运行全局 JavaScript 代码 [SCRIPT]',
					arguments: {
						SCRIPT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'console.log("Hello!");'
						}
					}
				},
				{
					opcode: 'save_eval',
					blockType: Scratch.BlockType.COMMAND,
					text: '运行局部 JavaScript 代码 [SCRIPT]',
					arguments: {
						SCRIPT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'console.log("Hello!");'
						}
					}
				},
				{
					opcode: 'ss_save',
					blockType: Scratch.BlockType.COMMAND,
					text: '将 [VALUE] 存储到进程存储键 [KEY]',
					arguments: {
						VALUE: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'value'
						},
						KEY: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'key'
						}
					}
				},
				{
					opcode: 'ls_save',
					blockType: Scratch.BlockType.COMMAND,
					text: '将 [VALUE] 存储到永久存储键 [KEY]',
					arguments: {
						VALUE: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'value'
						},
						KEY: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'key'
						}
					}
				},
				{
					opcode: 'ls_get',
					blockType: Scratch.BlockType.REPORTER,
					text: '取永久存储键 [KEY]',
					arguments: {
						KEY: {
							type: Scratch.ArgumentType.STRING
						}
					}
				},
				{
					opcode: 'left',
					blockType: Scratch.BlockType.REPORTER,
					text: '[VALUE] << [BITS]',
					arguments: {
						VALUE: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 1
						},
						BITS: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 1
						}
					}
				},
				{
					opcode: 'right',
					blockType: Scratch.BlockType.REPORTER,
					text: '[VALUE] >> [BITS]',
					arguments: {
						VALUE: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 1
						},
						BITS: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 1
						}
					}
				},
				{
					opcode: 'xright',
					blockType: Scratch.BlockType.REPORTER,
					text: '[VALUE] >>> [BITS]',
					arguments: {
						VALUE: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 1
						},
						BITS: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 1
						}
					}
				},
				{
					opcode: 'and',
					blockType: Scratch.BlockType.REPORTER,
					text: '[A] 按位与 [B]',
					arguments: {
						A: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 5
						},
						B: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 3
						}
					}
				},
				{
					opcode: 'or',
					blockType: Scratch.BlockType.REPORTER,
					text: '[A] 按位或 [B]',
					arguments: {
						A: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 6
						},
						B: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 5
						}
					}
				},
				{
					opcode: 'xor',
					blockType: Scratch.BlockType.REPORTER,
					text: '[A] 按位异或 [B]',
					arguments: {
						A: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 10
						},
						B: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 7
						}
					}
				},
				{
					opcode: 'bnot',
					blockType: Scratch.BlockType.REPORTER,
					text: '按位取反 [X]',
					arguments: {
						X: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 5
						}
					}
				},
				{
					opcode: 'exact_eq',
					blockType: Scratch.BlockType.BOOLEAN,
					text: '[A] 严格等于于 [B]',
					arguments: {
						A: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'a'
						},
						B: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'b'
						}
					}
				},
				{
					opcode: 'arr_length',
					blockType: Scratch.BlockType.REPORTER,
					text: '取 [JSONV] 长度',
					arguments: {
						JSONV: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '[1, 2]'
						}
					}
				},
				{
					opcode: 'lowbit',
					blockType: Scratch.BlockType.REPORTER,
					text: '[X] 的 Lowbit',
					arguments: {
						X: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 12
						}
					}
				},
				{
					opcode: 'subjson',
					blockType: Scratch.BlockType.REPORTER,
					text: '[J] 的子项 [V]',
					arguments: {
						J: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '{"sub":{"key": "value"}}'
						},
						V: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'sub'
						}
					}
				},
				{
					opcode: 'jsonstr',
					blockType: Scratch.BlockType.REPORTER,
					text: '[J] 的字符串值 [V]',
					arguments: {
						J: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '{"key": "value"}'
						},
						V: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'key'
						}
					}
				},
				{
					opcode: 'jsonnum',
					blockType: Scratch.BlockType.REPORTER,
					text: '[J] 的数值 [V]',
					arguments: {
						J: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '{"key": 1}'
						},
						V: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'key'
						}
					}
				},
				{
					opcode: 'jsonbool',
					blockType: Scratch.BlockType.BOOLEAN,
					text: '[J] 的布尔值 [V]',
					arguments: {
						J: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '{"key": true}'
						},
						V: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'key'
						}
					}
				},
				{
					opcode: 'arrconstruct',
					blockType: Scratch.BlockType.REPORTER,
					text: '构建结构键值对 [K] → [V]',
					arguments: {
						K: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'key'
						},
						V: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '[1, 2]'
						}
					}
				},
				{
					opcode: 'strconstruct',
					blockType: Scratch.BlockType.REPORTER,
					text: '构建字符串键值对 [K] → [V]',
					arguments: {
						K: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'key'
						},
						V: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'string'
						}
					}
				},
				{
					opcode: 'numconstruct',
					blockType: Scratch.BlockType.REPORTER,
					text: '构建数字键值对 [K] → [V]',
					arguments: {
						K: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'key'
						},
						V: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 1
						}
					}
				},
				{
					opcode: 'boolconstruct',
					blockType: Scratch.BlockType.REPORTER,
					text: '构建布尔键值对 [K] → [V]',
					arguments: {
						K: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'key'
						},
						V: {
							type: Scratch.ArgumentType.BOOLEAN,
							defaultValue: true
						}
					}
				},
				{
					opcode: 'nan',
					blockType: Scratch.BlockType.REPORTER,
					text: 'NaN',
					arguments: {}
				},
				{
					opcode: 'undef',
					blockType: Scratch.BlockType.REPORTER,
					text: 'undefined',
					arguments: {}
				},
				{
					opcode: 'null',
					blockType: Scratch.BlockType.REPORTER,
					text: 'null',
					arguments: {}
				},
				{
					opcode: 'infty',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Infinity',
					arguments: {}
				},
				{
					opcode: 'ninfty',
					blockType: Scratch.BlockType.REPORTER,
					text: '-Infinity',
					arguments: {}
				},
				{
					opcode: 'regex',
					blockType: Scratch.BlockType.BOOLEAN,
					text: '[STR] 满足 [REGEX]',
					arguments: {
						STR: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'Minecraft'
						},
						REGEX: {
							type: Scratcj.ArgumentType.STRING,
							defaultValue: '^[a-zA-Z]+$'
						}
					}
				},
				{
					opcode: 'xhr',
					blockType: Scratch.BlockType.REPORTER,
					text: 'GET [URL]',
					arguments: {
						URL: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'https://www.example.com/data.txt'
						}
					}
				},
				{
					opcode: 'xhrpost',
					blockType: Scratch.BlockType.REPORTER,
					text: 'POST [URL] [DATA]',
					arguments: {
						URL: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'https://www.example.com/api'
						},
						DATA: {
							type: Scratcj.ArgumentType.STRING,
							defaultValue: 'name=XMLHttpRequest&value=1'
						}
					}
				},
				{
					opcode: 'xhrpost1',
					blockType: Scratch.BlockType.COMMAND,
					text: 'POST [URL] [DATA]',
					arguments: {
						URL: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'https://www.example.com/api'
						},
						DATA: {
							type: Scratcj.ArgumentType.STRING,
							defaultValue: 'name=XMLHttpRequest&value=1'
						}
					}
				},
				{
					opcode: 'dest',
					blockType: Scratch.BlockType.COMMAND,
					text: '弃用 [STR]',
					arguments: {
						STR: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'something'
						},
					}
				},
				{
					opcode: 'dest1',
					blockType: Scratch.BlockType.COMMAND,
					text: '弃用 [STR]',
					arguments: {
						STR: {
							type: Scratch.ArgumentType.BOOLEAN,
							defaultValue: true
						},
					}
				},
				{
					opcode: 'arrat',
					blockType: Scratch.BlockType.REPORTER,
					text: '数组 [ARR] 的第 [IDX] 项',
					arguments: {
						ARR: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "[1, 2, 3]"
						},
						IDX: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 1
						}
					}
				},
				{
					opcode: 'load_lib',
					blockType: Scratch.BlockType.COMMAND,
					text: '加载 JavaScript 库 [URL]',
					arguments: {
						URL: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "https://fastly.jsdelivr.net/something"
						}
					}
				},
				{
					opcode: 'window_class',
					blockType: Scratch.BlockType.REPORTER,
					text: '(高危) Window 类',
					arguments: {}
				},
				{
					opcode: 'document_class',
					blockType: Scratch.BlockType.REPORTER,
					text: '(高危) Document 类',
					arguments: {}
				},
				{
					opcode: 'alertjs',
					blockType: Scratch.BlockType.COMMAND,
					text: 'alert([MSG])',
					arguments: {
						MSG: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: "Hello"
						}
					}
				}
			]
		}
	}
	alertjs(args) {
		alert(args.MSG);
	}
	document_class(args) {
		return JSON.stringify(document);
	}
	window_class(args) {
		return JSON.stringify(window);
	}
	load_lib(args) {
		var obj = document.createElement("script");
		obj.src = args.URL;
		document.getElementsByTagName("head")[0].appendChild(obj);
	}
	arrat(args) {
		if (!/^[1-9][0-9]*$/.test(args.IDX.toString())) {
			return undefined;
		}
		var obj;
		try {
			obj = JSON.parse(args.ARR);
		}
		catch (err) {
			return undefined;
		}
		return obj[args.IDX];
	}
	dest1(args) {}
	dest(args) {}
	xhrpost1(args) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', args.URL, false);
		xhr.setRequestHeader('Conten-Type', 'application/x-www-form-urlencoded');
		xhr.send(args.DATA);
	}
	xhrpost(args) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', args.URL, false);
		xhr.setRequestHeader('Conten-Type', 'application/x-www-form-urlencoded');
		xhr.send(args.DATA);
		return xhr.responseText;
	}
	xhr(args) {
		let xhr= new XMLHttpRequest();
		xhr.open('GET', args.URL, false);
		xhr.send();
		return xhr.responseText;
	}
	regex(args) {
		return (new RegExp(args.REGEX)).test(args.STR);
	}
	ninfty(args) {
		return -Infinity;
	}
	infty(args) {
		return Infinity;
	}
	null(args) {
		return this.null;
	}
	undef(args) {
		return undefined;
	}
	nan(args) {
		return NaN;
	}
	boolconstruct(args) {
		return JSON.stringify(({}[args.K] = args.V));
	}
	numconstruct(args) {
		return JSON.stringify(({}[args.K] = args.V));
	}
	strconstruct(args) {
		return JSON.stringify(({}[args.K] = args.V));
	}
	arrconstruct(args) {
		var obj;
		try {
			obj = JSON.parse(args.V);
		}
		catch (err) {
			return JSON.stringify(({}[args.K] = null));
		}
		return JSON.stringify(({}[args.K] = obj));
	}
	jsonbool(args) {
		var obj, res;
		try {
			obj = JSON.parse(args.J);
			res = obj[V] + "";
		} catch (err) {
			return NaN;
		}
		return res == "true";
	}
	jsonnum(args) {
		var obj, res;
		try {
			obj = JSON.parse(args.J);
			res = Number(obj[V]);
		} catch (err) {
			return NaN;
		}
		return res;
	}
	jsonstr(args) {
		var obj, res;
		try {
			obj = JSON.parse(args.J);
			res = obj[V] + "";
		} catch (err) {
			return 'undefined';
		}
		return res;
	}
	subjson(args) {
		var obj, res;
		try {
			obj = JSON.parse(args.J);
			res = JSON.stringify(obj[V]);
		} catch (err) {
			return '{}';
		}
		return res;
	}
	lowbit(args) {
		return args.X & (-args.X);
	}
	unsafe_eval(args) {
		eval(args.SCRIPT);
	}
	save_eval(args) {
		(new Function(args.SCRIPT))();
	}
	ss_save(args) {
		window.sessionStorage[args.KEY] = args.VALUE;
	}
	ls_save(args) {
		window.localStorage[args.KEY] = args.VALUE;
	}
	ss_get(args) {
		return window.sessionStorage[args.KEY];
	}
	ls_get(args) {
		return window.localStorage[args.KEY];
	}
	left(args) {
		return args.VALUE << args.BITS;
	}
	right(args) {
		return args.VALUE >> args.BITS;
	}
	xright(args) {
		return args.VALUE >>> args.BITS;
	}
	and(args) {
		return args.A & args.B;
	}
	or(args) {
		return args.A | args.B;
	}
	xor(args) {
		return args.A ^ args.B;
	}
	bnot(args) {
		return ~args.X;
	}
	exact_eq(args) {
		return args.A === args.B;
	}
	arr_length(args) {
		var obj;
		try {
			obj = JSON.parse(args.JSONV);
		}
		catch (err) {
			return NaN;
		}
		if (!obj.length) return NaN;
		return obj.length;
	}
}

Scratch.extensions.register(new JSExtension());