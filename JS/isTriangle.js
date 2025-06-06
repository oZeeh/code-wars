/* The triangle inequality states: 
the sum of the lengths of any two sides of a triangle must be 
greater than or equal to the length of the third side. 
Which implies this: the sum of lengths of the shortest two sides must 
be greater than or equal to the length of the longest side.*/
function isTriangle(a,b,c)
{
    return a + b > c && b + c > a && c + a > b
}
