import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import itemsSlice, { itemsSliceActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());

    let fdata = fetch("http://localhost:8080/items", { signal });
    console.log(fdata);
    fdata
      .then((res) => {
        console.log(res);
        //coverts body properrty of res object and return to next parameter of .then
        return res.json();
      })
      .then((items) => {
        //object made ek property ahe items navachi jo ek array ahe ani tya array chi value value mhanje 22 value cha array
        console.log(items);
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsSliceActions.addInitialItems(items.items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
