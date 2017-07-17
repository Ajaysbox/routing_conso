export class ServerService{
    private servers = [{
        id:1,
        name:"Production Server",
        status:"Active"
    },
    {
        id:2,
        name:"Test Server",
        status:"Offline"
    },
    {
        id:3,
        name:"Development Server",
        status:"Active"
    }];

    getServers(){
        return this.servers;
    };
    getServer(id:number){
        return this.servers[id];
    };
    updateServer(id:number,serverInfo:{name:string,status:string}){
        
    }
}