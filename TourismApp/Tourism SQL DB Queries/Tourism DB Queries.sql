CREATE TABLE Tourism
(
	PlaceID INT PRIMARY KEY IDENTITY(100,1),
	Name VARCHAR(100) NOT NULL,
	Pincode BIGINT NOT NULL,
	State VARCHAR(50) NOT NULL,
	Significance VARCHAR(20) NOT NULL CHECK (Significance IN ('Historic','Religious','Hillstation','Ocean','Amusement Park')),
	Description VARCHAR(MAX) NOT NULL
)

GO

CREATE TABLE ImageFiles
(
	EntryID INT PRIMARY KEY IDENTITY(1,1),
	PlaceID INT NOT NULL REFERENCES Tourism(PlaceID),
	ImageSource VARCHAR(MAX) NOT NULL
)
GO

insert into Tourism values ('Wonder La', 562109, 'Karnataka', 'Amusement Park', 'Wonderla is the largest chain of amusement parks in India. It is owned and operated by Wonderla Holidays Limited which is headquartered near Bidadi, 28 kilometres (17 mi) from Bengaluru, Karnataka. It operates 3 amusement parks in Kochi, Bengaluru, and Hyderabad.[1]

Wonderla is promoted by Kochouseph Chittilappilly and his son Arun Chittilappilly. The first amusement park project Wonderla Kochi was set up in 2000, followed by the second in Bengaluru in 2005, and finally the third in Hyderabad was commissioned in April 2016.[2] Wonderla is currently planning to open its 4th amusement park in Chennai. Wonderla amusement parks offer a variety of dry rides such as roller coasters, ferris wheels, drop towers and water rides for its customers.' );


select * from Tourism
insert into ImageFiles values(102,'D:\Starmark-Pavan R\ASP DotNet\Angular Web API\WebAPI\WebAPI\Images\Goa2.jpg');

select * from ImageFiles

insert into Tourism values ('Goa', 403, 'Goa', 'Ocean', 'Goa (/ˈɡoʊə/ (listen)) is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.[9][10] It is located between the Indian states of Maharashtra to the north and Karnataka to the east and south, with the Arabian Sea forming its western coast. It is Indias smallest state by area and its fourth-smallest by population. Goa has the highest GDP per capita among all Indian states,[4][11] two and a half times as high as the GDP per capita of the country as a whole.[12] The Eleventh Finance Commission of India named Goa the best-placed state because of its infrastructure, and Indias National Commission on Population rated it as having the best quality of life in India (based on the commissions "12 Indicators").[12] It is the third-highest ranking among Indian states in the human development index.' );

select * from employee