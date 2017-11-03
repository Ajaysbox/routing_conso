export class UserService{
     user:{id:number,name:string};
  users = [
    {
      id:1,
      name:'Max'
    },
    {
      id:2,
      name:'Anna'
    },
    {
      id:3,
      name:'Chris'
    }
  ];
  getUsers(){
      return this.users;
  };
  getUser(id:number){
      return this.users[id]
  }
}