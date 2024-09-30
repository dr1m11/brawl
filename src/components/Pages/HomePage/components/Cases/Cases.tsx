'use client'
import styles from './Cases.module.css'
import CaseSection from "@/components/Pages/HomePage/components/CaseSection/CaseSection";
import {useQuery} from "@tanstack/react-query";
import {caseService} from "@/services/case/case.service";

export const Cases = () => {
    const {isPending, data} = useQuery({
        queryKey: ['get-all-cases'],
        queryFn: () => caseService.getCases()
    })

    if (isPending || !data) return

    return (
        <div className={styles.cases}>
            {data.map((collection) => (
                <CaseSection title={collection.name} data={collection.data} key={collection.name} />
            ))}
        </div>
    )
}