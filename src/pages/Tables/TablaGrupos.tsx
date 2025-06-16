import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import BasicTableUser from "../../components/tables/BasicTables/BasicTableUser";

export default function BasicTables() {
    return (
        <>
            <PageMeta
                title="Gestión Formación | SENA"
                description="Gestión Formación | SENA"
            />
            <PageBreadcrumb pageTitle="Tabla Grupos" />
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
                
                <BasicTableUser />
                
            </div>
        </>
    );
}