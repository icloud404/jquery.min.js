





    function namdam9(input) {
		if (input.checked) {
        h5gg.clearResults();
        h5gg.searchNumber('909000001','I32','0x100000000', '0x200000000');
        h5gg.editAll('909035007', 'I32'); //m1887lv7
        h5gg.clearResults();
		}else{
			h5gg.clearResults();
			h5gg.searchNumber('909035007','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000001', 'I32'); //gốc
			h5gg.clearResults();
		}
    }


    function namdam8(input) {
		if (input.checked) {
			h5gg.clearResults();
			h5gg.searchNumber('909000001','I32','0x100000000', '0x200000000');
			h5gg.editAll('909039011', 'I32'); //M1014lv8
			h5gg.clearResults();
		}else{
			h5gg.clearResults();
			h5gg.searchNumber('909039011','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000001', 'I32'); //gốc
			h5gg.clearResults();
		}
    }


    function namdam7(input) {
		if (input.checked) {
			h5gg.clearResults();
			h5gg.searchNumber('909000001','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000085', 'I32'); //xm8
			h5gg.clearResults();
		}else{
			h5gg.clearResults();
			h5gg.searchNumber('909000085','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000001', 'I32'); //gốc
			h5gg.clearResults();
		}
    }



    function namdam6(input) {
		if (input.checked) {
			h5gg.clearResults();
			h5gg.searchNumber('909000001','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000068', 'I32'); //scar
			h5gg.clearResults();
		}else{
			h5gg.clearResults();
			h5gg.searchNumber('909000068','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000001', 'I32'); //gốc
			h5gg.clearResults();
		}
    }



    function namdam5(input) {
		if (input.checked) {
			h5gg.clearResults();
			h5gg.searchNumber('909000001','I32','0x100000000', '0x200000000');
			h5gg.editAll('909040010', 'I32'); //Mp40lv8
			h5gg.clearResults();
		}else{
			h5gg.clearResults();
			h5gg.searchNumber('909040010','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000001', 'I32'); //gốc
			h5gg.clearResults();
		}
    }



    function namdam4(input) {
		if (input.checked) {
			h5gg.clearResults();
			h5gg.searchNumber('909000001','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000090', 'I32'); //famat
			h5gg.clearResults();
		}else{
			h5gg.clearResults();
			h5gg.searchNumber('909000090','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000001', 'I32'); //gốc
			h5gg.clearResults();
		}
    }


    function namdam3(input) {
		if (input.checked) {
			h5gg.clearResults();
			h5gg.searchNumber('909000001','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000081', 'I32'); //M1014lv7
			h5gg.clearResults();
		}else{
			h5gg.clearResults();
			h5gg.searchNumber('909000081','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000001', 'I32'); //gốc
			h5gg.clearResults();
		}
    }

    

    function namdam2(input) {
		if (input.checked) {
			h5gg.clearResults();
			h5gg.searchNumber('909000001','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000098', 'I32'); //ump
			h5gg.clearResults();
		}else{
			h5gg.clearResults();
			h5gg.searchNumber('909000098','I32','0x100000000', '0x200000000');
			h5gg.editAll('909000001', 'I32'); //gốc
			h5gg.clearResults();
		}
    }



function aimngam(){
let rangeStart = '0x100000000';
let rangeEnd = '0x160000000';

let searchValue1 = '1075000115';
let searchValue2 = '3';
let searchValue3 = '1075000115';

let modifyValue = '-5';
h5gg.setFloatTolerance('0.0');
h5gg.clearResults();
h5gg.searchNumber(searchValue1, 'U32', rangeStart, rangeEnd);
let resultsCount1 = h5gg.getResultsCount();
if (resultsCount1 > 0) {
    h5gg.searchNearby(searchValue2, 'U32', '0x100');
    h5gg.searchNumber(searchValue3, 'U32', rangeStart, rangeEnd);
    let resultsCount2 = h5gg.getResultsCount();
    let results = h5gg.getResults(resultsCount2.toString(), '0');
    for (let i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, modifyValue, 'U32');
    }
    h5gg.clearResults();
} else {
    console.log('Không tìm thấy kết quả nào từ tìm kiếm đầu tiên.');
}

}

function aim180() {
        h5gg.clearResults();
        h5gg.searchNumber('1057048494','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('1054951342','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('1053273620','I32','0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32'); 
        h5gg.clearResults();
    }

	function norecoil(){
		h5gg.clearResults();
        h5gg.searchNumber('1016018816','I32','0x100000000', '0x200000000');
        h5gg.editAll('6018816', 'I32'); 
        h5gg.clearResults();
	}

	function Hscu(){
		h5gg.clearResults();
        h5gg.searchNumber('96688289','I32','0x100000000', '0x200000000');
        h5gg.editAll('2018908708', 'I32'); 
        h5gg.clearResults();
		}


	function xoahoat(){
let rangeStart = '0x100000000';
let rangeEnd = '0x160000000';

let searchValue1 = '3145840';
let searchValue2 = '1';
let searchValue3 = '3145840';

let modifyValue = '49';

h5gg.setFloatTolerance('0.0');
h5gg.clearResults();
h5gg.searchNumber(searchValue1, 'U32', rangeStart, rangeEnd);

let resultsCount1 = h5gg.getResultsCount();
if (resultsCount1 > 0) {
    h5gg.searchNearby(searchValue2, 'U32', '0x20');
    h5gg.searchNumber(searchValue3, 'U32', rangeStart, rangeEnd);
    let resultsCount2 = h5gg.getResultsCount();
    let results = h5gg.getResults(resultsCount2.toString(), '0');
    for (let i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, modifyValue, 'U32');
    }
    h5gg.clearResults();
} else {
    console.log('Không tìm thấy kết quả nào từ tìm kiếm đầu tiên.');
}
	}

function aimNgam(){
let rangeStart = '0x0';
let rangeEnd = '0x20000000000';
let searchValue = '0.09';
let modifyValue = '180';
h5gg.setFloatTolerance('0.0');
h5gg.clearResults();
h5gg.searchNumber(searchValue, 'F32', rangeStart, rangeEnd);
let resultsCount = h5gg.getResultsCount();
if (resultsCount > 0) {
    let results = h5gg.getResults(resultsCount.toString(), '0');
    for (let i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, modifyValue, 'F32');
    }
    h5gg.clearResults();
} else {
    console.log('Không tìm thấy kết quả nào từ tìm kiếm.');
}

}
function buffdame() {
	let rangeStart = '0x100000000';
	let rangeEnd = '0x160000000';

	let searchValue1 = '5.5';
	let searchValue2 = '0.75';

	let modifyValue = '10000000';
	h5gg.setFloatTolerance('0.0');
	h5gg.clearResults();
	h5gg.searchNumber(searchValue1, 'F32', rangeStart, rangeEnd);
	h5gg.searchNumber(searchValue2, 'F32', rangeStart, rangeEnd);
	let resultsCount = h5gg.getResultsCount();

	if (resultsCount > 0) {
		let results = h5gg.getResults(resultsCount.toString(), '0');

		for (let i = 0; i < results.length; i++) {
			h5gg.setValue(results[i].address, modifyValue, 'F32');
		}

		h5gg.clearResults();
	} else {
		console.log('Không tìm thấy kết quả nào từ tìm kiếm.');
	}
}


function antennam(){
let rangeStart = '0x100000000';
let rangeEnd = '0x160000000';

let searchValue1 = '5.9762459e-7';
let searchValue2 = '1';
let searchValue3 = '1';

let modifyValue = '200';

h5gg.setFloatTolerance('0.0');

h5gg.clearResults();

h5gg.searchNumber(searchValue1, 'F32', rangeStart, rangeEnd);
h5gg.searchNearby(searchValue2, 'F32', '0x20');
h5gg.searchNumber(searchValue3, 'F32', rangeStart, rangeEnd);
let resultsCount = h5gg.getResultsCount();
if (resultsCount > 0) {
    let results = h5gg.getResults(resultsCount.toString(), '0');
    for (let i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, modifyValue, 'F32');
    }
    h5gg.clearResults();
} else {
    console.log('Không tìm thấy kết quả nào từ tìm kiếm.');
}

}

function antennu() {
let rangeStart = '0x100000000';
let rangeEnd = '0x160000000';

let searchValue1 = '7.5538861e-7';
let searchValue2 = '1';
let searchValue3 = '1';

let modifyValue = '200';

h5gg.setFloatTolerance('0.0');
h5gg.clearResults();
h5gg.searchNumber(searchValue1, 'F32', rangeStart, rangeEnd);
h5gg.searchNearby(searchValue2, 'F32', '0x20');
h5gg.searchNumber(searchValue3, 'F32', rangeStart, rangeEnd);
let resultsCount = h5gg.getResultsCount();
if (resultsCount > 0) {
    let results = h5gg.getResults(resultsCount.toString(), '0');
    for (let i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, modifyValue, 'F32');
    }
    h5gg.clearResults();
} else {
    console.log('Không tìm thấy kết quả nào từ tìm kiếm.');
}

}


function Cothut() {
    const operations = [{
        searchValue: 96688289, replaceValue: -1541408846, suffixes: ['594']}, {
        searchValue: -1541408846, replaceValue: -1051086991, suffixes: ['C74']},]; function searchAndModify(searchValue, replaceValue, suffixes) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); if (results.length === 0) {
            console.warn(`Không tìm thấy giá trị cần thay thế: ${searchValue}`); return
        }
        results.forEach(result=> {
            suffixes.forEach(suffix=> {
                if (result.address.endsWith(suffix)) {
                    h5gg.setValue(result.address, replaceValue.toString(), 'I32')}})})}
    operations.forEach(operation=> {
        searchAndModify(operation.searchValue,
            operation.replaceValue,
            operation.suffixes)})}















