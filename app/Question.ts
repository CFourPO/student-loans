/**
 * Created by Home on 1/24/17.
 */
export class Question {
    id: string;
    label: string;
    required: boolean;
    type: string;

    constructor(
        id: string,
        type: string,
        label?: string,
        required?: boolean
    ) {
        this.id = id;
        this.type = type;
        this.label = label ? label : this.id;
        this.required = required ? required : true;
    }
}

export class

