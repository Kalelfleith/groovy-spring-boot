package com.groovyboot.service.holder

import com.groovyboot.domain.holder.Holder
import com.groovyboot.repository.holder.HolderRepository
import com.groovyboot.service.holder.HolderService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class HolderServiceImpl implements HolderService{

    @Autowired
    private final HolderRepository holderRepository

    public List<Holder> getHolderList() {
        return holderRepository.findAll()
    }

    public Holder getHolder(Long id) {
        Optional<Holder> holder = holderRepository.findById(id)
        if (holder.isPresent()) return holder.get()
        return null
    }

    public Holder save(Map holderInfo) {
        Holder holder = new Holder()
        holder.name = holderInfo.name
        holder.cpfCnpj = holderInfo.cpfCnpj
        holder.email = holderInfo.email
        holder.birthDate = CustomDateUtils.toDate(holderInfo.birthDate)
        holder.dateCreated = new Date()
        return holder
    }

}
