<?
define('MODX_API_MODE', true);

	class good_arte {
		
		var $id; 
		var $pagetitle;
		var $longtitle;
		var $art;
		var $price;
		var $oldprice;
		var $img;
		
		function getgooddata($id) {
			//Выцепляем данные товара
			global $modx;
			$this->id=$id;
			
			
			$sql = "SELECT `modx_site_content`.pagetitle,`modx_site_content`.longtitle,`modx_site_tmplvar_contentvalues`.value,`modx_site_content`.`price`,`modx_site_content`.oldprice FROM `modx_site_content` LEFT JOIN `modx_site_tmplvar_contentvalues` ON `modx_site_content`.`id` = `modx_site_tmplvar_contentvalues`.`contentid` WHERE (`modx_site_content`.`id`='$id' and `modx_site_tmplvar_contentvalues`.`tmplvarid`=2)";
			
			//echo $sql;
			$statement = $modx->query($sql);
			$result = $statement->fetchAll(PDO::FETCH_ASSOC);
			$i=1;
			foreach($result as $r_tv){
				$this->pagetitle = $r_tv['pagetitle'];
				$this->longtitle= $r_tv['longtitle'];
				$this->art= $r_tv['value'];
				$price=$r_tv['price'];
				$this->price=str_replace(".00",'', $price);
				$this->oldprice = $r_tv['oldprice'];
			}
			$this->img='/imag_ftp/'.$this->art.'/'.$this->art.'.jpg'; // определяем путь изображений
		}
		
		function sum($count) {
			$sum=$price[1]*$count;
		}
		
		function getcollection($id){
			//получаем коллекцию товара
			
		}
	
	
	}

?>