-- create plant table
CREATE TABLE dbo.Plant
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	[Name] varchar(50) NOT NULL,
	Light varchar(4000),
	Water money,
	WaterFrequency varchar(4000),
	Temperature float,
	Nutrients varchar(4000),
	NutrientsFrequency varchar(4000),
	[Description] varchar(4000),
	CareNeeds varchar(4000),
	ImageUrl nvarchar(4000) NOT NULL
	);

-- create user table
CREATE TABLE dbo.[User]
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	FirebaseId varchar(50) NOT NULL,
	[Admin] bit NOT NULL default 0,
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	Email varchar(100) NOT NULL,
	ImageUrl nvarchar(4000) NULL,
	DateCreated datetime NOT NULL,
	);

-- create userPlant table
CREATE TABLE dbo.UserPlant
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	PlantId uniqueidentifier NOT NULL, 
	UserId uniqueidentifier NOT NULL, 
	[Status] varchar(20), 
	PetName varchar(50), 
	DateCreated datetime NOT NULL, 
	InitialAgeDays int NOT NULL, 
	AgeStage varchar(50) NOT NULL,
	CONSTRAINT FK_UserPlant_PlantId FOREIGN KEY (PlantId)
		REFERENCES dbo.Plant (Id),
	CONSTRAINT FK_UserPlant_UserId FOREIGN KEY (UserId)
		REFERENCES dbo.[User] (Id)
	);

-- create log table
CREATE TABLE dbo.[Log]
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	UserPlantId uniqueidentifier NOT NULL,
	DateCreated datetime NOT NULL, 
	EntryNumber integer NOT NULL,
	[Entry] varchar(500) NOT NULL,
	EntryDate datetime NOT NULL,
	CONSTRAINT FK_Log_UserPlantId FOREIGN KEY (UserPlantId)
		REFERENCES dbo.UserPlant (Id)
	);

-- create userInventory table
CREATE TABLE dbo.UserInventory
	(
	Id uniqueidentifier NOT NULL primary key default(newsequentialid()),
	InventoryId uniqueidentifier NOT NULL,
	UserId uniqueidentifier NOT NULL,
	Quantity int NOT NULL,
	[Name] varchar(50) NOT NULL,
	[Description] varchar(500) NOT NULL,
	CONSTRAINT FK_UserInventory_UserId FOREIGN KEY (UserId)
		REFERENCES dbo.[User] (Id)
	);