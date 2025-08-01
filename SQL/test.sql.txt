DECLARE @InitSubdivisionId INT;

SELECT @InitSubdivisionId = subdivision_id
FROM collaborators
WHERE id = 710253;

WITH RecursiveSubs AS (
     SELECT
         id,
         name,
         parent_id,
         0 AS sub_level
     FROM subdivisions
     WHERE id = @InitSubdivisionId

     UNION ALL

     SELECT
         s.id,
         s.name,
         s.parent_id,
         rs.sub_level + 1
     FROM subdivisions s
     INNER JOIN RecursiveSubs rs ON s.parent_id = rs.id
     WHERE s.id NOT IN (100055, 100059)
),
CollaboratorCounts AS (
     SELECT
         subdivision_id,
         COUNT(*) AS colls_count
     FROM collaborators
     WHERE subdivision_id IN (SELECT id FROM RecursiveSubs)
     GROUP BY subdivision_id
)
SELECT
     c.id,
     c.name,
     rs.name AS sub_name,
     rs.id AS sub_id,
     rs.sub_level,
     ISNULL(cc.colls_count, 0) AS colls_count
FROM collaborators c
INNER JOIN RecursiveSubs rs ON c.subdivision_id = rs.id
LEFT JOIN CollaboratorCounts cc ON cc.subdivision_id = rs.id
WHERE c.age < 40
ORDER BY rs.sub_level ASC;