import { useMemo } from "react";
import AccountItem from "~/components/AccountItem";

function SearchResult({searchResult}) {
    const memoizedAccountItems = useMemo(() => {
        return (
            searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))
        )
    }, [searchResult])
    return memoizedAccountItems;
}

export default SearchResult;