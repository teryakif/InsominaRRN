module.exports.templateTags = [{
    name: 'rrn',
    displayName: 'RRN',
    description: 'Generate RRN',
    async run (context) {

const d = new Date();
let result = d.getTime()
let s = result.toString().substring(0,12);
        return s;
    }
}];


