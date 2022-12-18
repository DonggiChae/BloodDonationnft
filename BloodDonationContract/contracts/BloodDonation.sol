// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";

contract BloodDonation is ERC721Enumerable,AccessControl{
    bytes32 public constant HOSPITAL = keccak256("HOSPITAL");
    bytes32 public constant REDCROSS = keccak256("REDCROSS");

    constructor() ERC721("BloodDonation", "BDNFT") { 
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Enumerable,AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    event BDUploaded (uint256 indexed tokenId, string photo, string title, string location, string description, uint256 timestamp);

    mapping (uint256 => BDData) public _BDList;

    struct BDData {
        uint256 tokenId;                       // Unique token id
        address[] ownerHistory;                // History of all previous owners
        string photo;                          // BD Photo URI
        string title;                          // Title of photo
        string location;                       // Location where did BloodDonation
        string description;                    // Short description about the photo
        uint256 timestamp;                     // Uploaded time issued
        bool used;                             // Check if used
    }
    
    string notUsedPhotoURI = "ipfs://Qmaxf9tkEZUT18k3jRhYdbFCsybrAsz4t96PkCZZtgBToF";
    string usedPhotoURI = "ipfs://QmSh32dKugoo3e9XXvqKZS6nDYb2EMEBZLLv5TebgZ6XdE";
    bool public used = false;


    function _notUsedPhotoURI() public view returns (string memory) {
        return notUsedPhotoURI;
    }

    function _usedPhotoURI() public view returns (string memory) {
        return usedPhotoURI;
    }

    function setNotUsedURI(string memory _newNotUsedURI) public onlyRole(DEFAULT_ADMIN_ROLE){
        notUsedPhotoURI = _newNotUsedURI;
    }

    function setUsedURI(string memory _newUsedURI) public onlyRole(DEFAULT_ADMIN_ROLE){
        usedPhotoURI = _newUsedURI;
    }

    function use(uint256 tokenId) public onlyRole(HOSPITAL) {
        require(msg.sender == _BDList[tokenId].ownerHistory[_BDList[tokenId].ownerHistory.length-1], "You have to owned a token!");
        require(_BDList[tokenId].used == false, "Already used.");
        _BDList[tokenId].used = !_BDList[tokenId].used;
        _BDList[tokenId].photo = usedPhotoURI;
    }

    //add a Admin account 
    function addAdmin(address account) public  onlyRole(DEFAULT_ADMIN_ROLE){
        grantRole(DEFAULT_ADMIN_ROLE, account);
    }

    //renounce a Admin Role
    function renounceAdmin()public onlyRole(DEFAULT_ADMIN_ROLE){
        renounceRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // Give roles so that only authorized people can use BloodDonations.
    function grantHospitalRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE){
        grantRole(HOSPITAL, account);
    }

    function grantRedCrossRole(address account) public onlyRole(DEFAULT_ADMIN_ROLE){
        grantRole(REDCROSS, account);
    }

    // check Roles
    function checkHospitalRole(address account) public view {
        _checkRole(HOSPITAL, account);
    }

    function checkRedCrossRole(address account) public view {
        _checkRole(REDCROSS, account);
    }

    function checkAdminRole(address account) public view {
        _checkRole(DEFAULT_ADMIN_ROLE, account);
    }


/**
   * @notice _mint() is from ERC721.sol
   */
    function mintBD(string memory title, string memory location, string memory description , address to) public onlyRole(REDCROSS){
        uint256 tokenId = totalSupply() + 1;

        _mint(to, tokenId);

        address[] memory ownerHistory;

        BDData memory newBDData = BDData({
            tokenId : tokenId,
            ownerHistory : ownerHistory,
            photo : notUsedPhotoURI,
            title: title,
            location : location,
            description : description,
            timestamp : block.timestamp,
            used: false
        });

        _BDList[tokenId] = newBDData;
        _BDList[tokenId].ownerHistory.push(to);

        emit BDUploaded(tokenId, notUsedPhotoURI, title, location, description, block.timestamp);
    }

    
    function transferOwnership(uint256 tokenId, address to) public  {
        safeTransferFrom(msg.sender, to, tokenId);
        _BDList[tokenId].ownerHistory.push(to);
        // uint ownerHistoryLength = _BDList[tokenId].ownerHistory.length;
        // return (
        //     _BDList[tokenId].tokenId,
        //     //original owner
        //     _BDList[tokenId].ownerHistory[0],
        //     //previous owner, length cannot be less than 2
        //     _BDList[tokenId].ownerHistory[ownerHistoryLength-2],
        //     //current owner
        //     _BDList[tokenId].ownerHistory[ownerHistoryLength-1]
        // );
    }


    function batchTransferOwnership(uint256[] memory tokenIds, address to) public  {
        for (uint256 i = 0; i < tokenIds.length; ++i) {
            uint256 tokenId = tokenIds[i];
            safeTransferFrom(msg.sender, to, tokenId);
            _BDList[tokenId].ownerHistory.push(to);
        }
    }

    // function transferFrom(address from, address to, uint256 tokenId) public override(ERC721, IERC721) {
    //     transferFrom(from, to, tokenId);
    //     _BDList[tokenId].ownerHistory.push(to);
    // }



    function getTotalBDCount () public view returns (uint) {
        return totalSupply();
    }

    function getBD (uint tokenId) public view
    returns(uint256, address[] memory, string memory, string memory, string memory, string memory, uint256) {
        require(_BDList[tokenId].tokenId != 0, "Blood does not exist");
        return (
            _BDList[tokenId].tokenId,
            _BDList[tokenId].ownerHistory,
            _BDList[tokenId].photo,
            _BDList[tokenId].title,
            _BDList[tokenId].location,
            _BDList[tokenId].description,
            _BDList[tokenId].timestamp);
    }
}
