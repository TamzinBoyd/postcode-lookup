import { FunctionComponent } from "react";
import { OpeningTimes } from "./CollectTab";
import Typography from "./typography/Typography";

interface Props {
	times: OpeningTimes;
}

const OpeningTimesCard: FunctionComponent<Props> = ({ times }) => {
	return (
		<div>
            <Typography tag="h6" classname="font-bold mb-2">Opening Times</Typography>
			<Typography tag='p' classname='text-xs'>
				Mon {times.Mon}
			</Typography>
			<Typography tag='p' classname='text-xs'>
				Tues {times.Tues}
			</Typography>
			<Typography tag='p' classname='text-xs'>
				Wed {times.Wed}
			</Typography>
			<Typography tag='p' classname='text-xs'>
				Thurs {times.Thurs}
			</Typography>
			<Typography tag='p' classname='text-xs'>
				Fri {times.Fri}
			</Typography>
			<Typography tag='p' classname='text-xs'>
				Sat {times.Sat}
			</Typography>
			<Typography tag='p' classname='text-xs'>
				Sun {times.Sun}
			</Typography>
		</div>
	);
};

export default OpeningTimesCard;
