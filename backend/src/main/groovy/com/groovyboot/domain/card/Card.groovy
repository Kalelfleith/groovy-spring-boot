package com.groovyboot.domain.card

import com.groovyboot.domain.base.BaseEntity
import com.groovyboot.domain.holder.Holder
import com.sun.istack.NotNull

import javax.persistence.Entity
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table (name = "card")
class Card extends BaseEntity{

    @NotNull
    String maskeNumber

    @NotNull
    Integer expirationMonth

    @NotNull
    Integer expirationYear

    @ManyToOne
    @JoinColumn(name = "holder_id", referencedColumnName = "id", nullable = false)
    Holder holder
}
