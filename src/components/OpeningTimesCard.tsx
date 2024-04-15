import { FunctionComponent } from "react";
import { OpeningTimes } from "../types/types";
import Typography from "./typography/Typography";

interface Props {
	times: OpeningTimes;
}

const OpeningTimesCard: FunctionComponent<Props> = ({ times }) => {
	return (
		<div className="opening-times__card">
            <Typography tag="h6" classname="font-bold mb-1">Opening Times</Typography>
			<Typography tag='p' classname='text-xs leading-normal'>
				Mon {times.Mon}
			</Typography>
			<Typography tag='p' classname='text-xs leading-normal'>
				Tues {times.Tues}
			</Typography>
			<Typography tag='p' classname='text-xs leading-normal'>
				Wed {times.Wed}
			</Typography>
			<Typography tag='p' classname='text-xs leading-normal'>
				Thurs {times.Thurs}
			</Typography>
			<Typography tag='p' classname='text-xs leading-normal'>
				Fri {times.Fri}
			</Typography>
			<Typography tag='p' classname='text-xs leading-normal'>
				Sat {times.Sat}
			</Typography>
			<Typography tag='p' classname='text-xs leading-normal'>
				Sun {times.Sun}
			</Typography>
		</div>
	);
};

export default OpeningTimesCard;
