'use client'
import styles from './CaseSection.module.css'
import Custom1 from "@/../public/Home/Heroes_Box.png";
import {useQuery} from "@tanstack/react-query";
import {caseService} from "@/services/case/case.service";
import {CaseSectionProps} from "@/components/Pages/HomePage/components/types";
import Case from "@/components/Pages/HomePage/components/Case/Case";

const CaseSection = ({title}: CaseSectionProps) => {
    const {isPending, data} = useQuery({
        queryKey: ['get-all-cases'],
        queryFn: () => caseService.getCases()
    })

    return (
        <div className={styles.root}>
            {
                title
                &&
                <h2 className={styles.cases__heading}>
                    {title}
                </h2>
            }
            <div className={styles.cases__section}>
                {
                    !isPending && data?.length &&
                    data.map(({id, name, price}) => (
                        <>
                            <Case image={Custom1} title={name} desc={'dvcghdvsgvdf'} price={price} id={id} key={id} />
                            <Case image={Custom1} title={name} desc={'dvcghdvsgvdf'} price={price} id={id} key={id + 'asf'} />
                            <Case image={Custom1} title={name} price={price} id={id} key={id + 'asfd'} />
                            <Case image={Custom1} title={name} price={price} id={id} key={id + 'sdfgfg'} />
                            <Case image={Custom1} title={name} desc={'dvcghdvsgvdf'} price={price} id={id} key={id + 'sdfgfgdfg'} />
                            <Case image={Custom1} title={name} desc={'dvcghdvsgvdf'} price={price} id={id} key={id + 'sdfgfgdfgfd'} />
                            <Case image={Custom1} title={name} price={price} id={id} key={id + 'sdfgfgbvgt'} />
                            <Case image={Custom1} title={name} price={price} id={id} key={id + 'sdfgfgrtvcb'} />
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default CaseSection;