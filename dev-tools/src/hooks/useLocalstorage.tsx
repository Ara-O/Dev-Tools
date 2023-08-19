export function useLocalStorage(item: string) {

    let lsItem = localStorage.getItem(item)

    return [lsItem]
}