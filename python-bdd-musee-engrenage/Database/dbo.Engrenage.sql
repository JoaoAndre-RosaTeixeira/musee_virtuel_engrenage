INSERT INTO [dbo].[Engrenage] 
([Id], [NomEngrenage], [Avantage], [Inconvénient], [Image], [Date], [Prénom]) 
VALUES 
(1, N'Les engrenages cylindriques à denture droite',
N'Simple et économique, Pas d’efforts axiaux', 
N'Vitesses de rotation limitées, 
BruyantEntraxes prenant des valeurs finies , ', 
<SQLVARIANT>, 
N'2022-11-28', N'Lakhbir')

INSERT INTO [dbo].[Engrenage] 
([Id], [NomEngrenage], [Avantage], [Inconvénient], [Image], [Date], [Prénom]) 
VALUES 
(2, N'Les engrenages cylindriques à denture hélicoïdale',
N'Transmission plus souple et moins bruyante, 
Transmission d’efforts et de vitesses plus importants, 
Possibilités d’entraxes infinis', 
N'Effort axial supplémentaire, 
Solution moins économique,Rendement moins bon  ', 
<SQLVARIANT>, 
N'2022-11-28', N'Lakhbir')

INSERT INTO [dbo].[Engrenage] 
([Id], [NomEngrenage], [Avantage], [Inconvénient], [Image], [Date], [Prénom]) 
VALUES 
(3, N'Les engrenages coniques', 
N'Arbres non parallèles voir non concourants, 
Possibilité de choisir le sens de rotation de la roue menée ', 
N'Solution moins économique, 
Nécessité d’un réglage des roues au montage', 
<SQLVARIANT>, 
N'2022-11-28', N'Lakhbir')

INSERT INTO [dbo].[Engrenage] 
([Id], [NomEngrenage], [Avantage], [Inconvénient], [Image], [Date], [Prénom]) 
VALUES (4, N'Les engrenages à roue et vis sans fin', 
N'Arbres quelconques (Très souvent orthogonaux), 
Rapport de réduction élevés', 
N'Rendement faible, 
Parfois non réversible 
(peut être un avantage)', 
<SQLVARIANT>, 
N'2022-11-28', N'Lakhbir')

