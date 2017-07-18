export class ServerService{
    private servers = [{
        id:1,
        name:"Production Server",
        status:"Online"
    },
    {
        id:2,
        name:"Test Server",
        status:"Offline"
    },
    {
        id:3,
        name:"Development Server",
        status:"Online"
    }];

    getServers(){
        return this.servers;
    };
    getServer(id:number){
        return this.servers[id];
    };
    updateServer(id:number,serverInfo:{name:string,status:string}){
        const server = this.servers.find((servr)=>{
            return servr.id === id;
        });
        console.log("server : "+server.name)
        if(server){
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    }
}