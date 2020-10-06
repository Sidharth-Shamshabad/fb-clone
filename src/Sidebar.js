import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow'; 
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/58377251_2141007819330251_2614179239674511360_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=yOD5soM91V4AX-PuDvf&_nc_ht=scontent-lga3-1.xx&oh=d43d1e0687b9fbb9fa456c25144b448c&oe=5FA04414" title="Sidharth Shamshabad"/>
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow 
                Icon={EmojiFlagsIcon} 
                title="Pages"
            />
            <SidebarRow 
                Icon={PeopleIcon}
                title="Friends"
            />
            <SidebarRow 
                Icon={ChatIcon}
                title="Messenger"
            />
            <SidebarRow 
                Icon={StorefrontIcon}
                title="Marketplace"
            />
            <SidebarRow 
                Icon={VideoLibraryIcon}
                title="Videos"
            />
            <SidebarRow 
                Icon={ExpandMoreOutlined}
                title="Marketplace"
            />
        </div>
    )
}

export default Sidebar;
