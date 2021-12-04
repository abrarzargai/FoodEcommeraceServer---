## GetAll Orders
-http://localhost:8080/api/Order/GetAll (Get)

## Add Order
-http://localhost:8080/api/Order/Add (Post)

{	
	"Items":["61a49ef18c212f65347a295e","61a49f1b8c212f65347a295f"], (ItemID Array)
	"Comments":"Make it fast at address 3945876 stre 786 city,country",
	"TotalPrice":150.00,
	"User":"61a49d6e8c212f65347a295d" (UserID)
    "Email":"ali@gmail.com",
	"Image":"image of paid slip"
	
}
## Update Order Status
-http://localhost:8080/api/Order/UpdateStatus (Post)

{	
	"Id":"61ab85b84e31523ce803f98d", (orderID)
	"Status":"pending"
}

## Get Order By Specific User

-http://localhost:8080/api/Order/GetOrdersByUser (Post)

{	
	"Email":"ali@gmail.com"
}

## Signup
-http://localhost:8080/api/user/signup (Post)
{	
	"Name":"Abrar",
	"Email":"ali343i@gmail.com",
	"Password":"12345678",
	"DOB":"09/18/1990",
	"Address":"Maryam Center, RWPssssss",
	"PhoneNumber":"+92837383838",
	"Role":"customer"
	
}

## Login
-http://localhost:8080/api/user/login (Post)
{	

	"Email":"alii@gmail.com",
	"Password":"12345678"

}

## Update password
-http://localhost:8080/api/user/updatepassword (Post)
{	

	"Email":"abrar@gmail.com",
	"OldPassword":"12345",
	"NewPassword":"12345678"

}

## Emailverification
-http://localhost:8080/api/auth/Email (Post)
{
	"Email":"abrarzargai@gmail.com",
	"Code":1233

}