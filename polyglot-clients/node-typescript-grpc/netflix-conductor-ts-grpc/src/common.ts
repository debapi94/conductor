export class Error{
    message?: string;
}
export class Response{
    value?: any;
}

export interface TaskReturnObject{
    status:string;
    output:object;
    logs:Array<any>;
}