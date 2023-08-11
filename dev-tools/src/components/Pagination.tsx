interface Props {
    pages: number,
    changePage: any,
    currentPage: number
}

export default function Pagination({ pages, changePage, currentPage }: Props) {

    function handleChangePage(page: number) {
        if (currentPage === page) return

        changePage(page)
    }
    return (
        <>
            <div className="flex ">
                {
                    [...new Array(pages)].map((_, i) => <span key={i + 1} onClick={() => handleChangePage(i + 1)} className="cursor-pointer h-8 w-8 hover:text-black transition-colors border flex items-center justify-center font-light text-gray-500">{i + 1}</span>
                    )
                }
            </div>

        </>
    )

} 