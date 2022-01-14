package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity 
@Table(name = "tb_score")

public class Score {
	
	 @EmbeddedId
      private ScorePK id = new ScorePK(); //Chave primaria composta vinda da DB
      private Double value;
      
      public Score() {
    	  
      }

	public Score(Double value) {
		super();
		this.value = value;
	}
	
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}

	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
      
      
}