module Main exposing (..)


type alias Rank =
    Int


type Heap a
    = E
    | T Rank a (Heap a) (Heap a)



-- rank r of a leftist heap is the length of its rightmost spine


computeRank h =
    case h of
        E ->
            0

        T r _ left right ->
            if r == (1 + computeRank right) then
                r
            else
                Debug.crash "incorrect rank"


rank h =
    case h of
        E ->
            0

        T r _ _ _ ->
            r
