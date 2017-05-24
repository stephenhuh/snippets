module Main exposing (..)


type Nat
    = Z
    | S Nat


fromInt : Int -> Nat
fromInt n =
    if n <= 0 then
        Z
    else
        S (fromInt (n - 1))
