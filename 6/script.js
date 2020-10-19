function siSameuser(objekt1,objekt2) {
    return objekt1.email === objekt2.email
}

//test
let user1 = {email:"supp@supp.com"}
let user2 = {email:"supp2@supp.com"}
console.log(siSameuser(user1,user2))