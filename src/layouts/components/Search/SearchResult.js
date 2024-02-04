import { useMemo } from "react";
import AccountItem from "~/components/AccountItem";
import PropTypes from 'prop-types';

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

SearchResult.propTypes = {
    searchResult: PropTypes.array.isRequired
}

export default SearchResult;