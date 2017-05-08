module FFA exposing (..)

-- add the first arg to 0 and subtract the second arg


addAndSubtract : Int -> Int -> Int
addAndSubtract add subtract =
    0 + add - subtract



-- Tests FFA with one arg
-- expect 2


addAndSubtractOne =
    7 |> addAndSubtract 9



-- Tests FFA with zero args
-- expect a function


addAndSubtractTwo =
    7 |> addAndSubtract



-- Use the expected function as an adder
-- expect -2


addAndSubtractThree =
    9 |> (7 |> addAndSubtract)
