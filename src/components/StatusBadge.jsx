


export default function StatusBadge({status}){

    if(!status) return null;
    
    if(status === 'now') return(
        <span className="font-semibold text-primary-50 text-xs px-2 py-1 rounded-full bg-background">NOW</span>
    );

    if(status === 'next') return(
        <span className="font-semibold text-accent text-xs px-2 py-1 rounded-full bg-accent-100">UP NEXT</span>
    );

    return null;
}