export class Error{
    message?: string;
}
export class Response{
    value?: string;
}

export class TaskReturnObject{
    status:string;
    output:object;
    logs:Array<any>;
}