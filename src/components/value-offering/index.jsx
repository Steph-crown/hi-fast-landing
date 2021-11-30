import { ValueOfferingContainer } from "./style";
import { ReactComponent as ValueOfferingBig } from "./../../assets/icons/the-value-offering.svg";
import { ReactComponent as ValueOfferingSmall } from "./../../assets/icons/the-value-offering(small).svg";

export const ValueOffering = () => {
    return (
        <ValueOfferingContainer>
            <h3>The Value Offering</h3>
            <div className="bg-hide">
                <ValueOfferingSmall />
            </div>
            <div className="sm-hide">
                <ValueOfferingBig />
            </div>
        </ValueOfferingContainer>
    );
};
