export class Lead {
    public id: number;
    public updated_at: string;
    public created_at: string;
    public first_name: string;
    public last_name: string;
    public email:string;
    public mobile: string;
    public location_type: string;
    public location_string: string;
    public status: string;
    public communication: string;
    public tags: string;
    constructor(id: number, updater_at: string, created_at: string, first_name: string, last_name: string,email:string, mobile: string
        , location_type: string, location_string: string, status: string, communication: string, tags: string) {
        this.id = id;
        this.updated_at = updater_at
        this.created_at = created_at
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.mobile = mobile
        this.location_type = location_type;
        this.location_string = location_string;
        this.status = status;
        this.communication = communication;
        this.tags = tags;
    }
} 