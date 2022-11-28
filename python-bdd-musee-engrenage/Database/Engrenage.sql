CREATE TABLE [dbo].[Engrenage] (
    [Id]           INT            NOT NULL,
    [NomEngrenage] NVARCHAR (MAX) NOT NULL,
    [Avantage]     NVARCHAR (MAX) NOT NULL,
    [Inconvénient] NVARCHAR (MAX) NOT NULL,
    [Image]        IMAGE          NULL,
    [Date]         DATE           NOT NULL,
    [Prénom]       NVARCHAR (50)  NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);
