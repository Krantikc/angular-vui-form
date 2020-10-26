/**
 * Possible values for type are:
 * 'daterange', 'date', 'text', 'number', 'numberrange', 
 * 'next-tab', 'submit'
 */
export default class VuiResponse {
    type: string; 
    value: any;

    constructor(type?: string, value?: any) {
        this.type = type;
        this.value = value;
    }
}