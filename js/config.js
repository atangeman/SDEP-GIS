﻿/*global dojo */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
dojo.provide("js.config");
dojo.declare("js.config", null, {

    // This file contains various configuration settings for "Service Request" template
    //
    // Use this file to perform the following:
    //
    // 1.  Specify application Name                   - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon              - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set splash screen message                  - [ Tag(s) to look for: SplashScreenMessage ]
    // 4.  Set URL for help page                      - [ Tag(s) to look for: HelpURL ]
    // 5.  Specify URLs for base maps                 - [ Tag(s) to look for: BaseMapLayers ]
    // 5a. Specify URLs for any reference overlays    - [ Tag(s) to look for: ReferenceOverlays ]
    // 6.  Set initial map extent                     - [ Tag(s) to look for: DefaultExtent ]

    // 7.  Tags for using map services:
    // 7a. Specify URLs for operational layers        - [ Tag(s) to look for: serviceRequestLayerURL, serviceRequestmobileLayerURL, serviceRequestCommentsLayerURL,RequestId,CommentId ]
    //
    // 7b. Customize info-Window settings             - [ Tag(s) to look for: InfoWindowHeader, InfoWindowContent ]
    // 7c. Customize info-Popup settings              - [ Tag(s) to look for: infoWindowData, ShowCommentsTab, AllowAttachments ]
    // 7d. Customize info-Popup size                  - [ Tag(s) to look for: InfoPopupHeight, InfoPopupWidth ]
    // 7e. Customize data formatting                  - [ Tag(s) to look for: ShowNullValueAs, FormatDateAs ]
    // 8. Customize address search settings           - [ Tag(s) to look for: LocatorURL, LocatorNameFields, , LocatorDefaultAddress,LocatorDefaultPark, LocatorMarkupSymbolPath, AddressMatchScore,LocatorRippleSize ]
    //LocatorFields
    // 9. Set URL for geometry service                - [ Tag(s) to look for: GeometryService ]
    // 10.Set for uploading images into iOS devices   - [ Tag(s) to look for: enablePhotoUploadiOS,photoUploadText ]
    // 11.Specify URLs for map sharing               - [ Tag(s) to look for: MapSharingOptions,TinyURLServiceURL, TinyURLResponseAttribute, FacebookShareURL, TwitterShareURL, ShareByMailLink ]



    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "San Diego Emergency Participatory GIS App",

    // Set application icon path
    ApplicationIcon: "images/logo.png",

    // Set splash window content - Message that appears when the application starts
    SplashScreenMessage: "<br/><b>San Diego Emergency Participatory GIS App:</b><br/><br/>Please click directly on the edit icon (lower-left) to create and submit a data point. Fil out the form with information on the incident, including pictures and relevent comments and details. </br></br>If you find a request has already been submitted, you can click or tap on the existing request, provide additional comments and increase the importance of the request. </BR></BR>LEAGAL DISCLAIMER HERE",

    // Set URL of help page/portal
    HelpURL: "help.htm",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All base maps need to use the same spatial reference. By default, on application start the first basemap will be loaded

    BaseMapLayers: [{
        Key: "parcelMap",
        ThumbnailSource: "images/parcelmap.png",
        Name: "Streets",
        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"

    }, /*{
        Key: "hybridMap",
        ThumbnailSource: "images/imageryhybrid.png",
        Name: "Imagery",
        MapURL: "http://tryitlive.arcgis.com/arcgis/rest/services/ImageryHybrid/MapServer"
    }*/],
    //This section allows you to add a feature or map service layer, it must be an layer, not a service
    //use the following format {URL: ""},{URL: ""},...
    ReferenceOverlays: [
      {URL: "http://services1.arcgis.com/1vIhDJwtG5eNmiqX/ArcGIS/rest/services/public_features/FeatureServer/0"},
      {URL: "http://services1.arcgis.com/1vIhDJwtG5eNmiqX/ArcGIS/rest/services/public_features/FeatureServer/1"},
      {URL: "http://services1.arcgis.com/1vIhDJwtG5eNmiqX/ArcGIS/rest/services/public_features/FeatureServer/2"},
      {URL: "http://services1.arcgis.com/1vIhDJwtG5eNmiqX/ArcGIS/rest/services/public_features/FeatureServer/3"},
      {URL: "http://services1.arcgis.com/1vIhDJwtG5eNmiqX/ArcGIS/rest/services/public_features/FeatureServer/4"},
      {URL: "http://services1.arcgis.com/1vIhDJwtG5eNmiqX/ArcGIS/rest/services/public_features/FeatureServer/5"},
      {URL: "http://services1.arcgis.com/1vIhDJwtG5eNmiqX/ArcGIS/rest/services/public_features/FeatureServer/6"},
      {URL: "http://services1.arcgis.com/1vIhDJwtG5eNmiqX/arcgis/rest/services/Stations_and_Fire_Protection_Agencies_MAPSERVICE/FeatureServer/3"}
    ],
//Extent
    // Initial map extent. Use comma (,) to separate values and don t delete the last comma
    // ------------------------------------------------------------------------------------------------------------------------
    // Hackathon Edit: Extent modified to display San Diego region - atangeman20151005
    // ------------------------------------------------------------------------------------------------------------------------
    DefaultExtent: "-13062455, 3846396, -12993661, 3892258",


    // ------------------------------------------------------------------------------------------------------------------------
    // OPERATIONAL DATA SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Configure operational layers:
    // ------------------------------------------------------------------------------------------------------------------------
    // Hackathon Edit:  Operational Layers modified to utilize San Diego data - atangeman20151005
    // ------------------------------------------------------------------------------------------------------------------------
    OperationalLayers: {
        //URL used for doing query task on the ServiceRequest layer
        ServiceRequestLayerURL: "http://services6.arcgis.com/6gJSGswXHPsdZzkF/arcgis/rest/services/SanDiegoEmergencyFeatures/FeatureServer/0",
        //Set the primary key attribute for servicerequest
        RequestId: "${REQUESTID}",

        ServiceRequestMobileLayerURL: "http://services6.arcgis.com/6gJSGswXHPsdZzkF/arcgis/rest/services/SanDiegoEmergencyFeatures/FeatureServer/0",

        //URL used for doing query task on the comments layer
        ServiceRequestCommentsLayerURL: "http://services6.arcgis.com/6gJSGswXHPsdZzkF/arcgis/rest/services/SanDiegoEmergencyFeatures/FeatureServer/1",
        //Set the primary key attribute for the comments
        CommentId: "${REQUESTID}",



    },

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-WINDOW SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Info-window is a small, two line popup that gets displayed on selecting a feature
    // Set Info-window title. Configure this with text/fields
    InfoWindowHeader: "Request ID: ${REQUESTID}",

    // Choose content/fields for the info window
    InfoWindowContent: "${REQUESTTYPE}",

    //Define Service request layer name
    RequestLayerName: "REQUESTTYPE",

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-POPUP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    //The labels displayed next to the input boxes when creating a new point, leaving them blank will use the defaults
    InfoWindowCreateTitle: "",
    InfoWindowCreateType: "",
    InfoWindowCreateComments: "",
    InfoWindowCreateName: "",
    InfoWindowCreatePhone: "",
    InfoWindowCreateEmail: "",
    InfoWindowCreateAttach: "",

    // Info-popup is a popup dialog that gets displayed on selecting a feature
    // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats
    InfoWindowData: [{
        DisplayText: "Type:",
        AttributeValue: "${REQUESTTYPE}",
        DataType: "string"
    }, {
        DisplayText: "Comment:",
        AttributeValue: "${COMMENTS}",
        DataType: "string"
    },
    {
        DisplayText: "Severity:",
        AttributeValue: "${SEVERITY}",
        DataType: "string"
    },
     {
        DisplayText: "Date Submitted:",
        AttributeValue: "${REQUESTDATE}",
        DataType: "date"
    }, {
        DisplayText: "Status:",
        AttributeValue: "${STATUS}",
        DataType: "string"
    }],

    // Set this to true to show "Comments" tab in the info-Popup
    ShowCommentsTab: true,

    // Set this to true to show the Attach portion of the info-popup
    AllowAttachments: true,

    // Set size of the info-Popup - select maximum height and width in pixels (not applicable for tabbed info-Popup)
    //minimum height should be 270 for the info-popup in pixels
    InfoPopupHeight: 310,

    //minimum width should be 330 for the info-popup in pixels
    InfoPopupWidth: 330,

    // Set string value to be shown for null or blank values
    ShowNullValueAs: "N/A",

    // Set date format
    FormatDateAs: "MMM dd, yyyy",

    //Set the locator ripple size
    LocatorRippleSize: 30,

    //set ripple color for selected feature
    RippleColor: [60, 72, 36],

    //Set the attribute for displaying status of serviceRequest
    Status: "${STATUS}",



    // ------------------------------------------------------------------------------------------------------------------------
    // ADDRESS SEARCH SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set locator settings such as locator symbol, size, zoom level, display fields, match score

    LocatorSettings: {
        DefaultLocatorSymbol: "images/redpushpin.png",
        MarkupSymbolSize: {
            width: 35,
            height: 35
        },
        Locators: [{
            DisplayText: "Address",
            DefaultValue: "139 W Porter Ave Naperville IL 60540",
            LocatorParamaters: ["SingleLine"],
            LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            CandidateFields: "Loc_name, Score, Match_addr",
            DisplayField: "${Match_addr}",
            ZoomLevel: 7,
            AddressMatchScore: 80,
            LocatorDefaultRequest: "1",
            LocatorFieldName: 'Loc_name',
            LocatorFieldValues: ["USA.StreetName", "USA.PointAddress", "USA.StreetAddress"]
        }, {
            DisplayText: "All Reports",
            DefaultValue: "Naperville",
            //QueryString: "REQUESTID LIKE '${0}%'",
            QueryString: "REQUESTID LIKE '%'",
            //QueryString: "1=1",
            DisplayField: "${REQUESTID} , ${REQUESTTYPE} , ${SEVERITY}"
        }]
    },

    // Define the database field names
    // Note: DateFieldName refers to a date database field.
    // All other attributes refer to text database fields.
    DatabaseFields: {
        RequestIdFieldName: "REQUESTID",
        CommentsFieldName: "COMMENTS",
        DateFieldName: "SUBMITDT",
        RankFieldName: "RANK"
    },

    //Define service request input fields for submitting a new request
    ServiceRequestFields: {
        RequestIdFieldName: "REQUESTID",
        RequestTypeFieldName: "REQUESTTYPE",
        RequestSeverityLevel: "SEVERITY",
        CommentsFieldName: "COMMENTS",
        NameFieldName: "NAME",
        PhoneFieldName: "PHONE",
        EmailFieldName: "EMAIL",
        StatusFieldName: "STATUS",
        RequestDateFieldName: "REQUESTDATE"
    },

    // Set info-pop fields for adding and displaying comment
    CommentsInfoPopupFieldsCollection: {
        Rank: "${RANK}",
        SubmitDate: "${SUBMITDT}",
        Comments: "${COMMENTS}"
    },
    // ------------------------------------------------------------------------------------------------------------------------
    // GEOMETRY SERVICE SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set geometry service URL
    GeometryService: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------

    // Set URL for TinyURL service, and URLs for social media
    MapSharingOptions: {
        TinyURLServiceURL: "https://api-ssl.bitly.com/v3/shorten?longUrl=${0}",
        FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=Citizen%20Service%20Request",
        TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=Citizen%20Service%20Request ${0}",
        ShareByMailLink: "mailto:%20?subject=Check%20out%20this%20map!&body=${0}"
    },

    // set this flag to true to enable uploading images into iOS devices (uses 3rd party application to upload pictures)
    EnablePhotoUploadiOS: false,
    //Message displayed for 3rd party software. This is a HTML text
    PhotoUploadText: "Add attachment <hr/> <br/>This application uses \"Picup\" to add photos. You can download it from <a href='http://picupapp.com/' target='_blank'>PickupApp.com</a>"

});
