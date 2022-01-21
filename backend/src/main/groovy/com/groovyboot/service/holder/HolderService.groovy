package com.groovyboot.service.holder

import com.groovyboot.domain.holder.Holder

interface HolderService {

    public List<Holder> getHolderList()

    public Holder getHolder(Long id)

    public Holder save(Map holderInfo)

}