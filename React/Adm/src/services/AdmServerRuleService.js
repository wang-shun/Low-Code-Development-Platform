
import { fetchData, getAccessControlInfo, getAccessScope, baseUrl } from './webAPIBase';

let activeScope = {};

export function setAccessScope(scope) {
    activeScope = {
        ...activeScope,
        ...scope,
    }
}

export function GetAuthCol(accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetAuthCol'
        , {
            requestOptions: {
                body: JSON.stringify({
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetAuthRow(accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetAuthRow'
        , {
            requestOptions: {
                body: JSON.stringify({
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )

}
export function GetScreenLabel(accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetScreenLabel'
        , {
            requestOptions: {
                body: JSON.stringify({
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope || getAccessScope())
        }
    )

}

export function GetLabels(labelCat, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetLabels'
        , {
            requestOptions: {
                body: JSON.stringify({
                    labelCat: labelCat
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}

export function GetSystemLabels(labelCat, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetSystemLabels'
        , {
            requestOptions: {
                body: JSON.stringify({
                    labelCat: labelCat
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}

export function GetScreenButtonHlp(labelCat, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetScreenButtonHlp'
        , {
            requestOptions: {
                body: JSON.stringify({
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetScreenHlp(labelCat, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetScreenHlp'
        , {
            requestOptions: {
                body: JSON.stringify({
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetScreenCriteria(accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetScreenCriteria'
        , {
            requestOptions: {
                body: JSON.stringify({
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetNewMst(accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetNewMst'
        , {
            requestOptions: {
                body: JSON.stringify({
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetNewDtl(accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetNewDtl'
        , {
            requestOptions: {
                body: JSON.stringify({
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetScreenFilter(accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetScreenFilter'
        , {
            requestOptions: {
                body: JSON.stringify({
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetSearchList(searchStr, topN, filterId, desiredScreenCriteria, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetSearchList'
        , {
            requestOptions: {
                body: JSON.stringify({
                    searchStr: searchStr || '',
                    topN: topN || 0,
                    filterId: ('' + (filterId || 0)),
                    desiredScreenCriteria: desiredScreenCriteria || {},
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetAdmServerRule14List(searchStr, topN, filterId, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetAdmServerRule14List'
        , {
            requestOptions: {
                body: JSON.stringify({
                    searchStr: searchStr || '',
                    topN: topN || 0,
                    filterId: ('' + (filterId || 0)),
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetAdmServerRule14ById(keyId, options, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetAdmServerRule14ById'
        , {
            requestOptions: {
                body: JSON.stringify({
                    keyId: keyId || '',
                    options: options || {
                        CurrentScreenCriteria: JSON.stringify({}),
                    },
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export const GetMstById = GetAdmServerRule14ById;
export function GetAdmServerRule14DtlById(keyId, filterId, options, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetAdmServerRule14DtlById'
        , {
            requestOptions: {
                body: JSON.stringify({
                    keyId: keyId || '',
                    options: options || {
                        CurrentScreenCriteria: JSON.stringify({}),
                    },
                    filterId: filterId || 0,
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export const GetDtlById = GetAdmServerRule14DtlById;
export function LoadInitPage(options, accessScope) {
    const reqJson = JSON.stringify({
        options: options
    });
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/LoadInitPage'
        , {
            requestOptions: {
                body: reqJson,
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function SaveData(mst, dtl, options, accessScope) {
    const reqJson = JSON.stringify({
        mst: mst || {},
        dtl: dtl || [],
        options: options || {}
    });
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/SaveData'
        , {
            requestOptions: {
                body: reqJson,
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function DelMst(mst, options, accessScope) {
    const reqJson = JSON.stringify({
        mst: mst,
        options: options
    });
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/DelMst'
        , {
            requestOptions: {
                body: reqJson,
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function SetScreenCriteria(criteriaValues, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/SetScreenCriteria'
        , {
            requestOptions: {
                body: JSON.stringify({
                    criteriaValues: criteriaValues
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}
export function GetRefColumnContent(mstId, dtlId, refKeyId, isMaster, refScreenColumnName, options, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetRefColumnContent'
        , {
            requestOptions: {
                body: JSON.stringify({
                    mstId: mstId || null,
                    dtlId: dtlId || null,
                    refKeyId: refKeyId || null,
                    refScreenColumnName: refScreenColumnName || null,
                    isMaster: isMaster || false,
                    options: options || {},
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}

export function GetColumnContent(mstId, dtlId, columnName, isMaster, screenColumnName, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetColumnContent'
        , {
            requestOptions: {
                body: JSON.stringify({
                    mstId: mstId || '',
                    dtlId: dtlId || '',
                    screenColumnName: screenColumnName,
                    columnName: columnName,
                    isMaster: isMaster || false,
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}

export function GetEmbeddedDoc(mstId, dtlId, isMaster, screenColumnName, accessScope) {
    const reqJson = JSON.stringify({
        mstId: mstId || '',
        dtlId: dtlId || '',
        isMaster: isMaster || false,
        columnName: screenColumnName || '',
        screenColumnName: screenColumnName || '',
    });
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetColumnContent'
        , {
            requestOptions: {
                body: reqJson,
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}

export function SaveEmbeddedImage(mstId, dtlId, isMaster, screenColumnName, docJson, options, accessScope) {
    const reqJson = JSON.stringify({
        mstId: mstId || '',
        dtlId: dtlId || '',
        isMaster: isMaster || false,
        screenColumnName: screenColumnName || '',
        docJson: docJson || '',
        options: options || {},
    });
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/AddDocColumnContent'
        , {
            requestOptions: {
                body: reqJson,
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}

export function GetDocZipDownload(keyId, options, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetDocZipDownload'
        , {
            requestOptions: {
                body: JSON.stringify({
                    keyId: keyId || null,
                    options: options ||{},
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}

/*screen criteria dll and screen dropdownlist/autocomplete*/

export function GetScreenCriScreenId10List(query, topN, filterBy, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetScreenCriteriaDdlList'
        , {
            requestOptions: {
                body: JSON.stringify({
                    screenCriId: 16,
                    query: query || '',
                    topN: topN || 0,
                    filterBy: filterBy || null
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}

export function GetRuleTypeId24List(query, topN, filterBy, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetRuleTypeId24List'
        , {
            requestOptions: {
                body: JSON.stringify({
                    query: query || '',
                    topN: topN || 0,
                    filterBy: filterBy || null
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}


export function GetScreenId24List(query, topN, filterBy, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetScreenId24List'
        , {
            requestOptions: {
                body: JSON.stringify({
                    query: query || '',
                    topN: topN || 0,
                    filterBy: filterBy || null
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}


export function GetBeforeCRUD24List(query, topN, filterBy, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetBeforeCRUD24List'
        , {
            requestOptions: {
                body: JSON.stringify({
                    query: query || '',
                    topN: topN || 0,
                    filterBy: filterBy || null
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}


export function GetRunMode24List(query, topN, filterBy, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetRunMode24List'
        , {
            requestOptions: {
                body: JSON.stringify({
                    query: query || '',
                    topN: topN || 0,
                    filterBy: filterBy || null
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}


export function GetModifiedBy24List(query, topN, filterBy, accessScope) {
    return fetchData(baseUrl + '/AdmServerRuleWs.asmx/GetModifiedBy24List'
        , {
            requestOptions: {
                body: JSON.stringify({
                    query: query || '',
                    topN: topN || 0,
                    filterBy: filterBy || null
                }),
            },
            ...(getAccessControlInfo()),
            ...(accessScope)
        }
    )
}

/* ReactRule: Service Custom Function */


/* ReactRule End: Service Custom Function */
