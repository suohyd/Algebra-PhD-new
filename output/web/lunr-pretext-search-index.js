var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-algebra",
  "level": "1",
  "url": "sec-algebra.html",
  "type": "Section",
  "number": "1.1",
  "title": "Algebra over a commutative ring",
  "body": " Algebra over a commutative ring  We begin with a definition of algebra over a commutative ring.   Associative algebra   Let be a commutative ring with unity . An -algebra or algebra over is a unital right -module together with -bilinear map denoted by that is associative, i.e., for all , and there is a unity such that for all .      The bilinearlity of the map in implies the following relation for any and any .     We have the following equivalent definition of -algebra.    Following statements are equivalent.    is an -algebra     is a ring and a right -module such that for any and , we have .        Assume that is an -algebra. Then is a ring with the multiplication given by the -bilinear map . Indeed, the associativity of the multiplication follows from the definition. The distributivity of the multiplication over addition follows from the bilinearity of the map. The existence of unity is also given in the definition. The relation follows from .  Conversely, assume that is a ring and a right -module such that for any and , we have . We consider a map as the multiplication in ring . Therefore, (resp., ) for any and also there is a unity in ring . The -linearity of the map follows from the relation , i.e., .        If is an algebra then, there is a ring homomorphism such that is contained in the center of .    Suppose that is a ring and there is a ring homomorphism such that is contained in the center of . Then, is an -algebra with the right -module structure given by for any and .        If is an -algebra then, we define a map by for any . It is easy to see that is a ring homomorphism and is contained in the center of . Conversely, suppose that is a ring and there is a ring homomorphism such that is contained in the center of . We consider the right -module structure on given by for any and . Then, it is easy to see that the relation in (2) holds. Therefore, by , we conclude that is an -algebra.   "
},
{
  "id": "def-algebra",
  "level": "2",
  "url": "sec-algebra.html#def-algebra",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Associative algebra.",
  "body": " Associative algebra   Let be a commutative ring with unity . An -algebra or algebra over is a unital right -module together with -bilinear map denoted by that is associative, i.e., for all , and there is a unity such that for all .   "
},
{
  "id": "obs-algebra",
  "level": "2",
  "url": "sec-algebra.html#obs-algebra",
  "type": "Observation",
  "number": "1.1.2",
  "title": "",
  "body": "  The bilinearlity of the map in implies the following relation for any and any .    "
},
{
  "id": "prop-algebra-equiv-def",
  "level": "2",
  "url": "sec-algebra.html#prop-algebra-equiv-def",
  "type": "Proposition",
  "number": "1.1.3",
  "title": "",
  "body": "  Following statements are equivalent.    is an -algebra     is a ring and a right -module such that for any and , we have .      "
},
{
  "id": "sec-algebra-7",
  "level": "2",
  "url": "sec-algebra.html#sec-algebra-7",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " Assume that is an -algebra. Then is a ring with the multiplication given by the -bilinear map . Indeed, the associativity of the multiplication follows from the definition. The distributivity of the multiplication over addition follows from the bilinearity of the map. The existence of unity is also given in the definition. The relation follows from .  Conversely, assume that is a ring and a right -module such that for any and , we have . We consider a map as the multiplication in ring . Therefore, (resp., ) for any and also there is a unity in ring . The -linearity of the map follows from the relation , i.e., .  "
},
{
  "id": "lem-algebra-in-center",
  "level": "2",
  "url": "sec-algebra.html#lem-algebra-in-center",
  "type": "Lemma",
  "number": "1.1.4",
  "title": "",
  "body": "     If is an algebra then, there is a ring homomorphism such that is contained in the center of .    Suppose that is a ring and there is a ring homomorphism such that is contained in the center of . Then, is an -algebra with the right -module structure given by for any and .      "
},
{
  "id": "sec-algebra-9",
  "level": "2",
  "url": "sec-algebra.html#sec-algebra-9",
  "type": "Proof",
  "number": "1.1.2",
  "title": "",
  "body": " If is an -algebra then, we define a map by for any . It is easy to see that is a ring homomorphism and is contained in the center of . Conversely, suppose that is a ring and there is a ring homomorphism such that is contained in the center of . We consider the right -module structure on given by for any and . Then, it is easy to see that the relation in (2) holds. Therefore, by , we conclude that is an -algebra.  "
},
{
  "id": "sec-examples-algebras",
  "level": "1",
  "url": "sec-examples-algebras.html",
  "type": "Section",
  "number": "1.2",
  "title": "Some examples of algebras",
  "body": " Some examples of algebras   Associative ring as -algbera   Every associative ring can be considered as a -algebra.     Ring as an algebra over itself   Let be a commutative ring with unity. Then can be considered a right -module using the multiplication in ring . With this considerations, is an -algebra.     Ring over its center   Suppose that is a ring (not necessarily commutative), and let be the center of . Then is a -algebra.     Matrix algebra   Suppose that is a commutative ring and is a positive integer. Suppose that is an -algebra. Then the ring of matrices over , denoted by , is an -algebra.     Endomorphism algebra   Let be a commutative ring with unity. Suppose that is a right -module. The endomorphism ring is an -algebra.     Polynomial ring as algebra   Let be a commutative ring with unity. The polynomial ring is an -algebra.     Opposite algebra   Let be a commutative ring, and let be a right -algebra. We denote by the opposite ring of . Recall that as a set is equal to . Furthemore, it satisfies the following relations for any . Then is a right -algebra, called the opposite algebra of , gievn by the scalar multiplication     We discuss the example of Group algebra in the next section.  "
},
{
  "id": "sec-examples-algebras-2",
  "level": "2",
  "url": "sec-examples-algebras.html#sec-examples-algebras-2",
  "type": "Example",
  "number": "1.2.1",
  "title": "Associative ring as <span class=\"process-math\">\\(\\Z\\)<\/span>-algbera.",
  "body": " Associative ring as -algbera   Every associative ring can be considered as a -algebra.   "
},
{
  "id": "ex-ring-over-itself",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-ring-over-itself",
  "type": "Example",
  "number": "1.2.2",
  "title": "Ring as an algebra over itself.",
  "body": " Ring as an algebra over itself   Let be a commutative ring with unity. Then can be considered a right -module using the multiplication in ring . With this considerations, is an -algebra.   "
},
{
  "id": "ex-algebra-over-center",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-algebra-over-center",
  "type": "Example",
  "number": "1.2.3",
  "title": "Ring over its center.",
  "body": " Ring over its center   Suppose that is a ring (not necessarily commutative), and let be the center of . Then is a -algebra.   "
},
{
  "id": "ex-matrix-algebra",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-matrix-algebra",
  "type": "Example",
  "number": "1.2.4",
  "title": "Matrix algebra.",
  "body": " Matrix algebra   Suppose that is a commutative ring and is a positive integer. Suppose that is an -algebra. Then the ring of matrices over , denoted by , is an -algebra.   "
},
{
  "id": "ex-endomorphism-algebra",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-endomorphism-algebra",
  "type": "Example",
  "number": "1.2.5",
  "title": "Endomorphism algebra.",
  "body": " Endomorphism algebra   Let be a commutative ring with unity. Suppose that is a right -module. The endomorphism ring is an -algebra.   "
},
{
  "id": "ex-polynomial-algebra",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-polynomial-algebra",
  "type": "Example",
  "number": "1.2.6",
  "title": "Polynomial ring as algebra.",
  "body": " Polynomial ring as algebra   Let be a commutative ring with unity. The polynomial ring is an -algebra.   "
},
{
  "id": "ex-oppositive-algebra",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-oppositive-algebra",
  "type": "Example",
  "number": "1.2.7",
  "title": "Opposite algebra.",
  "body": " Opposite algebra   Let be a commutative ring, and let be a right -algebra. We denote by the opposite ring of . Recall that as a set is equal to . Furthemore, it satisfies the following relations for any . Then is a right -algebra, called the opposite algebra of , gievn by the scalar multiplication    "
},
{
  "id": "sec-group-algebra",
  "level": "1",
  "url": "sec-group-algebra.html",
  "type": "Section",
  "number": "1.3",
  "title": "Group algebra",
  "body": " Group algebra   Group Ring   Let be a commutative ring with unity and a group. Consider the following set. Define addition and scalar multiplication in as follows. The multiplication in is defined as convolution product.       Show that is closed under addition, scalar multiplication, and it is an -module. Furthermore, show that multiplication is bilinear.    We now proceed to check the associativity of multiplication and the existence of unity in . We first observe that is a free -module.    Keep notations of above. Let for , be the characteristic function of , i.e., if and . Then, set is an -basis of . In particular, is a free -module.  Furthermore, given by is a monoid homomorphism. In particular, and if is the identity then, is the unity in .     Suppose that for some and . Evaluating at , we get . Thus, the set is linearly independent. Now, let . Then, we can write where the sum is over all such that . This shows that the set spans . Thus, it is an -basis of .  Direct calculation shows that for all .  We show the associativity of multiplication. Let . Then, there exists such that , , . Therefore, we obtain the following. This shows the associativity of multiplication.  For any we get the following. The above equation is nonzero only when and . This implies that . Thus, we get . Similarly, we can show that . This shows that is the unity in .    Group algebra of the cyclic group of order 2   Suppose that denotes the cyclic group of order two. The general element of is of the form for some . Observe that , and that is commutative. Consider the map given as follows. Check that the above map is a surjective homomorphism of rings. We compute its kernel. We have . We claim that the kernel is generated by . Let . Then, . As is a basis we have that and . Note that , and that . Hence, and divides . As and are coprime, we get that divides . This shows that . By the first isomorphism theorem, induces isomorphism of rings .      Let be a group of order two. Show that via the map .      Let be a finite group. Show that in a group ring following holds.    satisfies      and               Suppose that is a group and that is a commutative ring. Then, is an -algebra, and it is a free -module with basis .  Let be an -algebra, and let be a homomorphism to the multiplicative monoid of . Then, extends uniquely to an -algebra homomorphism of -algebras.  In other words, the following diagram commutes.  Universal property of group algebra          In view of , it suffices to show the universal property. Let be an -algebra and let be a homomorphism to the multiplicative monoid of . Define as follows. We leave it to the reader to check that is a well-defined homomorphism of -algebras and that it is the unique extension of .    Augmentation Ideal   Let be a commutative ring with unity and a nontrivial group. The augmentation map is the -algebra homomorphism given by . The kernel of the augmentation map is called the augmentation ideal of , and it is denoted by .     Augmentation map is an -algebra homomorphism   Show that the augmentation map is a well-defined surjective -algebra homomorphism.     Generators of augmentation ideal   Let be a commutative ring with unity and a nontrivial group. Show that the augmentation ideal is generated as an -module by the set , where is the identity of .    "
},
{
  "id": "def-group-algebra",
  "level": "2",
  "url": "sec-group-algebra.html#def-group-algebra",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Group Ring.",
  "body": " Group Ring   Let be a commutative ring with unity and a group. Consider the following set. Define addition and scalar multiplication in as follows. The multiplication in is defined as convolution product.    "
},
{
  "id": "sec-group-algebra-3",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-3",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": "  Show that is closed under addition, scalar multiplication, and it is an -module. Furthermore, show that multiplication is bilinear.   "
},
{
  "id": "prop-group-algebra-free-module",
  "level": "2",
  "url": "sec-group-algebra.html#prop-group-algebra-free-module",
  "type": "Proposition",
  "number": "1.3.3",
  "title": "",
  "body": "  Keep notations of above. Let for , be the characteristic function of , i.e., if and . Then, set is an -basis of . In particular, is a free -module.  Furthermore, given by is a monoid homomorphism. In particular, and if is the identity then, is the unity in .   "
},
{
  "id": "sec-group-algebra-6",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-6",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " Suppose that for some and . Evaluating at , we get . Thus, the set is linearly independent. Now, let . Then, we can write where the sum is over all such that . This shows that the set spans . Thus, it is an -basis of .  Direct calculation shows that for all .  We show the associativity of multiplication. Let . Then, there exists such that , , . Therefore, we obtain the following. This shows the associativity of multiplication.  For any we get the following. The above equation is nonzero only when and . This implies that . Thus, we get . Similarly, we can show that . This shows that is the unity in .  "
},
{
  "id": "eg-group-algebra-cyclic-2",
  "level": "2",
  "url": "sec-group-algebra.html#eg-group-algebra-cyclic-2",
  "type": "Example",
  "number": "1.3.4",
  "title": "Group algebra of the cyclic group of order 2.",
  "body": " Group algebra of the cyclic group of order 2   Suppose that denotes the cyclic group of order two. The general element of is of the form for some . Observe that , and that is commutative. Consider the map given as follows. Check that the above map is a surjective homomorphism of rings. We compute its kernel. We have . We claim that the kernel is generated by . Let . Then, . As is a basis we have that and . Note that , and that . Hence, and divides . As and are coprime, we get that divides . This shows that . By the first isomorphism theorem, induces isomorphism of rings .   "
},
{
  "id": "sec-group-algebra-8",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-8",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  Let be a group of order two. Show that via the map .   "
},
{
  "id": "sec-group-algebra-9",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-9",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": "  Let be a finite group. Show that in a group ring following holds.    satisfies      and            "
},
{
  "id": "thm-universal-property-group-algebra",
  "level": "2",
  "url": "sec-group-algebra.html#thm-universal-property-group-algebra",
  "type": "Theorem",
  "number": "1.3.7",
  "title": "",
  "body": "  Suppose that is a group and that is a commutative ring. Then, is an -algebra, and it is a free -module with basis .  Let be an -algebra, and let be a homomorphism to the multiplicative monoid of . Then, extends uniquely to an -algebra homomorphism of -algebras.  In other words, the following diagram commutes.  Universal property of group algebra        "
},
{
  "id": "sec-group-algebra-11",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-11",
  "type": "Proof",
  "number": "1.3.2",
  "title": "",
  "body": " In view of , it suffices to show the universal property. Let be an -algebra and let be a homomorphism to the multiplicative monoid of . Define as follows. We leave it to the reader to check that is a well-defined homomorphism of -algebras and that it is the unique extension of .  "
},
{
  "id": "def-augmentation-ideal",
  "level": "2",
  "url": "sec-group-algebra.html#def-augmentation-ideal",
  "type": "Definition",
  "number": "1.3.9",
  "title": "Augmentation Ideal.",
  "body": " Augmentation Ideal   Let be a commutative ring with unity and a nontrivial group. The augmentation map is the -algebra homomorphism given by . The kernel of the augmentation map is called the augmentation ideal of , and it is denoted by .   "
},
{
  "id": "sec-group-algebra-13",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-13",
  "type": "Checkpoint",
  "number": "1.3.10",
  "title": "Augmentation map is an <span class=\"process-math\">\\(R\\)<\/span>-algebra homomorphism.",
  "body": " Augmentation map is an -algebra homomorphism   Show that the augmentation map is a well-defined surjective -algebra homomorphism.   "
},
{
  "id": "exe-augmentation-ideal-generators",
  "level": "2",
  "url": "sec-group-algebra.html#exe-augmentation-ideal-generators",
  "type": "Checkpoint",
  "number": "1.3.11",
  "title": "Generators of augmentation ideal.",
  "body": " Generators of augmentation ideal   Let be a commutative ring with unity and a nontrivial group. Show that the augmentation ideal is generated as an -module by the set , where is the identity of .   "
},
{
  "id": "sec-morphisms-of-algebras",
  "level": "1",
  "url": "sec-morphisms-of-algebras.html",
  "type": "Section",
  "number": "1.4",
  "title": "Morphisms of algebras",
  "body": " Morphisms of algebras   Homomorphism of -algebras   Let be a commutative ring with unity. Let and be -algebras. An R-algebra homomorphism (or simply, a morphism of -algebras ) is a map which is both a ring homomorphism and an -module homomorphism.  An -algebra homomorphism from to itself is called an endormorphism of -algebras . The set of all endomorphisms of -algebras is denoted by .      The collection of -module homomorphisms of to itself will be denoted by .     Regular representation   Let be a field, and let be an -algebra. For we define an -linear map by for all . The following map is called the regular representation of . We leave it to the reader to verify that the regular representation is a homomorphism of -algebras.  Note that as is unital is nonzero for all nonzero . Thus, the regular representation is injective.     Ideal of an -algebra   Let be a commutative ring with unity. Let be an -algebra. A subset is called a (two-sided) ideal of the -algebra if is an ideal of the ring and an -submodule of the -module .      Keep notations of . Suppose that is a two-sided ideal of the ring . We claim that is also an -submodule of . Indeed, for and we have the following.      Quotient algebra   Let be a commutative ring with unity. Let be an -algebra. Show that the quotient is an -algebra for any ideal of . Furthermore, show that the natural projection is an -algebra homomorphism.  If is homomorphism of -algebras, then show that is an ideal of and that the image of is an -subalgebra of . Furthermore, show that as -algebras.     Factorization criterion   Let be a commutative ring with unity. Let and be homomorphisms of -algebras with surjective. Show that factors through (i.e., there exists a homomorphism of -algebras such that if and only if .   Factorization criterion   Factorization criterion diagram     In other words, there exists a dotted arrow ( -algebra homomorphism ) making the above diagram commutative if and only if .     Isomorphism of -algebras   Let be a commutative ring with unity. Let and be -algebras. An -algebra homomorphism is an isomorphism of -algebras if there exists an -algebra homomorphism such that and . In this case, we say that and are isomorphic as -algebras and we write .  An -algebra isomorphism from to itself is called an automorphism of -algebras . The set of all automorphisms of -algebras is denoted by .     Subalgebra   Let be a commutative ring with unity. Let be an -algebra. An -algebra is called an -subalgebra of if and the inclusion map is an -algebra homomorphism.    "
},
{
  "id": "def-morphism-of-algebras",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#def-morphism-of-algebras",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Homomorphism of <span class=\"process-math\">\\(R\\)<\/span>-algebras.",
  "body": " Homomorphism of -algebras   Let be a commutative ring with unity. Let and be -algebras. An R-algebra homomorphism (or simply, a morphism of -algebras ) is a map which is both a ring homomorphism and an -module homomorphism.  An -algebra homomorphism from to itself is called an endormorphism of -algebras . The set of all endomorphisms of -algebras is denoted by .   "
},
{
  "id": "sec-morphisms-of-algebras-3",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#sec-morphisms-of-algebras-3",
  "type": "Note",
  "number": "1.4.2",
  "title": "",
  "body": "  The collection of -module homomorphisms of to itself will be denoted by .   "
},
{
  "id": "ex-regular-representation",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#ex-regular-representation",
  "type": "Example",
  "number": "1.4.3",
  "title": "Regular representation.",
  "body": " Regular representation   Let be a field, and let be an -algebra. For we define an -linear map by for all . The following map is called the regular representation of . We leave it to the reader to verify that the regular representation is a homomorphism of -algebras.  Note that as is unital is nonzero for all nonzero . Thus, the regular representation is injective.   "
},
{
  "id": "def-ideal-of-algebra",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#def-ideal-of-algebra",
  "type": "Definition",
  "number": "1.4.4",
  "title": "Ideal of an <span class=\"process-math\">\\(R\\)<\/span>-algebra.",
  "body": " Ideal of an -algebra   Let be a commutative ring with unity. Let be an -algebra. A subset is called a (two-sided) ideal of the -algebra if is an ideal of the ring and an -submodule of the -module .   "
},
{
  "id": "note-ideal-of-algebra",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#note-ideal-of-algebra",
  "type": "Note",
  "number": "1.4.5",
  "title": "",
  "body": "  Keep notations of . Suppose that is a two-sided ideal of the ring . We claim that is also an -submodule of . Indeed, for and we have the following.    "
},
{
  "id": "exe-quotient-algebra",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#exe-quotient-algebra",
  "type": "Checkpoint",
  "number": "1.4.6",
  "title": "Quotient algebra.",
  "body": " Quotient algebra   Let be a commutative ring with unity. Let be an -algebra. Show that the quotient is an -algebra for any ideal of . Furthermore, show that the natural projection is an -algebra homomorphism.  If is homomorphism of -algebras, then show that is an ideal of and that the image of is an -subalgebra of . Furthermore, show that as -algebras.   "
},
{
  "id": "exe-factorization-criterion",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#exe-factorization-criterion",
  "type": "Checkpoint",
  "number": "1.4.7",
  "title": "Factorization criterion.",
  "body": " Factorization criterion   Let be a commutative ring with unity. Let and be homomorphisms of -algebras with surjective. Show that factors through (i.e., there exists a homomorphism of -algebras such that if and only if .   Factorization criterion   Factorization criterion diagram     In other words, there exists a dotted arrow ( -algebra homomorphism ) making the above diagram commutative if and only if .   "
},
{
  "id": "def-isomorphism-of-algebras",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#def-isomorphism-of-algebras",
  "type": "Definition",
  "number": "1.4.9",
  "title": "Isomorphism of <span class=\"process-math\">\\(R\\)<\/span>-algebras.",
  "body": " Isomorphism of -algebras   Let be a commutative ring with unity. Let and be -algebras. An -algebra homomorphism is an isomorphism of -algebras if there exists an -algebra homomorphism such that and . In this case, we say that and are isomorphic as -algebras and we write .  An -algebra isomorphism from to itself is called an automorphism of -algebras . The set of all automorphisms of -algebras is denoted by .   "
},
{
  "id": "def-subalgebra",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#def-subalgebra",
  "type": "Definition",
  "number": "1.4.10",
  "title": "Subalgebra.",
  "body": " Subalgebra   Let be a commutative ring with unity. Let be an -algebra. An -algebra is called an -subalgebra of if and the inclusion map is an -algebra homomorphism.   "
},
{
  "id": "sec-bimodule",
  "level": "1",
  "url": "sec-bimodule.html",
  "type": "Section",
  "number": "1.5",
  "title": "Bimodules",
  "body": " Bimodules  Suppose that is a right -algebra, and that is a right -module. Then, is also a right -module. Similarly, if is a left -algebra, and is a left -module, then is also a left -module.   (A,B) bimodule   Let be a commutative ring with unity. Let and be right -algebras. An -bimodule is an abelian group which is both a left -module and a right -module such that for all , , and we have the following compatibility conditions.      We sometimes denote the -bimodule by . Furthermore, if , then we say that is an -bimodule .     Let be a commutative ring with unity, and let be a right -algebra. Let be a left -module. Then, is -bimodule.     Representations and left modules   Let be a commutative ring with unity, and let be a right -algebra. If is a left -module, then is an -bimodule.  We can define representation of by . The map is an -algebra homomorphism.  Conversely, if is an -algebra homomorphism, then is a left -module via for all and .  We leave it to the reader to check that there is a one-to-one correspondence between left -modules and representations of .      Let be a commutative ring with unity, and let be a right -algebra. Suppose that is a left -module, and that are -algebra homomorphisms from to . Show that the following are equivalent.    and induces isomorphic -module structure on .    There exists invertible such that .       "
},
{
  "id": "def-bimodule",
  "level": "2",
  "url": "sec-bimodule.html#def-bimodule",
  "type": "Definition",
  "number": "1.5.1",
  "title": "(A,B) bimodule.",
  "body": " (A,B) bimodule   Let be a commutative ring with unity. Let and be right -algebras. An -bimodule is an abelian group which is both a left -module and a right -module such that for all , , and we have the following compatibility conditions.    "
},
{
  "id": "sec-bimodule-4",
  "level": "2",
  "url": "sec-bimodule.html#sec-bimodule-4",
  "type": "Note",
  "number": "1.5.2",
  "title": "",
  "body": " We sometimes denote the -bimodule by . Furthermore, if , then we say that is an -bimodule .  "
},
{
  "id": "sec-bimodule-5",
  "level": "2",
  "url": "sec-bimodule.html#sec-bimodule-5",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": "  Let be a commutative ring with unity, and let be a right -algebra. Let be a left -module. Then, is -bimodule.   "
},
{
  "id": "ex-representation-and-left-module",
  "level": "2",
  "url": "sec-bimodule.html#ex-representation-and-left-module",
  "type": "Example",
  "number": "1.5.4",
  "title": "Representations and left modules.",
  "body": " Representations and left modules   Let be a commutative ring with unity, and let be a right -algebra. If is a left -module, then is an -bimodule.  We can define representation of by . The map is an -algebra homomorphism.  Conversely, if is an -algebra homomorphism, then is a left -module via for all and .  We leave it to the reader to check that there is a one-to-one correspondence between left -modules and representations of .   "
},
{
  "id": "sec-bimodule-7",
  "level": "2",
  "url": "sec-bimodule.html#sec-bimodule-7",
  "type": "Checkpoint",
  "number": "1.5.5",
  "title": "",
  "body": "  Let be a commutative ring with unity, and let be a right -algebra. Suppose that is a left -module, and that are -algebra homomorphisms from to . Show that the following are equivalent.    and induces isomorphic -module structure on .    There exists invertible such that .      "
},
{
  "id": "sec-quaternions",
  "level": "1",
  "url": "sec-quaternions.html",
  "type": "Section",
  "number": "2.1",
  "title": "Quaternion algebra",
  "body": " Quaternion algebra   Throughout this section we assume that is a field with . The set of nonzero elements of is denoted by .    Quaternion algebra   Let . The quaternion algebra  or is the four-dimensional -vector space with basis and multiplication defined by the following relations and with as unity of . We assume the associativity of multiplication and extend the multiplication to all elements of by distributivity and linearity.  We get the following relations.       Keep notations of . The map defined by is an injective ring homomorphism. Thus, we can identify as a subalgebra of .     Hamiltonian quaternion algebra   The algebra is Hamiltonion quaternion algebra over the field of real numbers . It is usually denoted by .     as a quaternion algebra   Let be a field of characteristic not and a nonzero element. Consider the following matrices. Show that , , and that . Further show that is linearly independent over . Conclude that as an -algebra.     Degree of Quaternion algebra   Let be a quaternion algebra over a field of characteristic different from . The degree of , , i.e., .     Simple algebra   Let be an -algebra of finite dimension as an -vector space. We say that is a simple algebra if the only two-sided ideals of are and .      Let be a quaternion algebra over . Then, is a simple algebra with center .     Let be a nonzero two-sided ideal of . We show that . Let be a nonzero element. Then, we can write for some . For we write . Then, we have the following relations. Now , , and . So, if one of is nonzero then, will contain a unit, and thus, . If , then for some nonzero . Thus, , and hence, .  If then we must have . This implies that . Thus, .    Canonical involution of Quaternion algebra   Let be a field of characteristic not , and a quaternion algebra. The canonical involution on is given by       The canonical involution is an antiautomorphism of order , i.e., for any we have the following.   Furthermore, if and only if .     Pure quaternions   Let be a field of characteristic different from , and be a quaternion algebra over . The vector subspace of pure quaternions  is a vector subspace of spanned by , i.e.,       Let be a field of characteristic different from , and be a quaternion algebra over . Then,    implies that , and     if and only if and .       "
},
{
  "id": "def-quaternion-algebra",
  "level": "2",
  "url": "sec-quaternions.html#def-quaternion-algebra",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Quaternion algebra.",
  "body": " Quaternion algebra   Let . The quaternion algebra  or is the four-dimensional -vector space with basis and multiplication defined by the following relations and with as unity of . We assume the associativity of multiplication and extend the multiplication to all elements of by distributivity and linearity.  We get the following relations.    "
},
{
  "id": "sec-quaternions-4",
  "level": "2",
  "url": "sec-quaternions.html#sec-quaternions-4",
  "type": "Note",
  "number": "2.1.2",
  "title": "",
  "body": "  Keep notations of . The map defined by is an injective ring homomorphism. Thus, we can identify as a subalgebra of .   "
},
{
  "id": "note-hamiltonian-quaternion-algebra",
  "level": "2",
  "url": "sec-quaternions.html#note-hamiltonian-quaternion-algebra",
  "type": "Note",
  "number": "2.1.3",
  "title": "Hamiltonian quaternion algebra.",
  "body": " Hamiltonian quaternion algebra   The algebra is Hamiltonion quaternion algebra over the field of real numbers . It is usually denoted by .   "
},
{
  "id": "ex-2-by-2-matrices-as-quaternion-algebra",
  "level": "2",
  "url": "sec-quaternions.html#ex-2-by-2-matrices-as-quaternion-algebra",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "<span class=\"process-math\">\\(M_2(F)\\)<\/span> as a quaternion algebra.",
  "body": " as a quaternion algebra   Let be a field of characteristic not and a nonzero element. Consider the following matrices. Show that , , and that . Further show that is linearly independent over . Conclude that as an -algebra.   "
},
{
  "id": "def-degree-of-quaternion-algebra",
  "level": "2",
  "url": "sec-quaternions.html#def-degree-of-quaternion-algebra",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Degree of Quaternion algebra.",
  "body": " Degree of Quaternion algebra   Let be a quaternion algebra over a field of characteristic different from . The degree of , , i.e., .   "
},
{
  "id": "def-simple-algebra",
  "level": "2",
  "url": "sec-quaternions.html#def-simple-algebra",
  "type": "Definition",
  "number": "2.1.6",
  "title": "Simple algebra.",
  "body": " Simple algebra   Let be an -algebra of finite dimension as an -vector space. We say that is a simple algebra if the only two-sided ideals of are and .   "
},
{
  "id": "prop-quaternion-algebra-is-simple",
  "level": "2",
  "url": "sec-quaternions.html#prop-quaternion-algebra-is-simple",
  "type": "Proposition",
  "number": "2.1.7",
  "title": "",
  "body": "  Let be a quaternion algebra over . Then, is a simple algebra with center .   "
},
{
  "id": "sec-quaternions-10",
  "level": "2",
  "url": "sec-quaternions.html#sec-quaternions-10",
  "type": "Proof",
  "number": "2.1.1",
  "title": "",
  "body": " Let be a nonzero two-sided ideal of . We show that . Let be a nonzero element. Then, we can write for some . For we write . Then, we have the following relations. Now , , and . So, if one of is nonzero then, will contain a unit, and thus, . If , then for some nonzero . Thus, , and hence, .  If then we must have . This implies that . Thus, .  "
},
{
  "id": "def-canonical-involution-on-quaternion",
  "level": "2",
  "url": "sec-quaternions.html#def-canonical-involution-on-quaternion",
  "type": "Definition",
  "number": "2.1.8",
  "title": "Canonical involution of Quaternion algebra.",
  "body": " Canonical involution of Quaternion algebra   Let be a field of characteristic not , and a quaternion algebra. The canonical involution on is given by    "
},
{
  "id": "sec-quaternions-12",
  "level": "2",
  "url": "sec-quaternions.html#sec-quaternions-12",
  "type": "Note",
  "number": "2.1.9",
  "title": "",
  "body": "  The canonical involution is an antiautomorphism of order , i.e., for any we have the following.   Furthermore, if and only if .   "
},
{
  "id": "def-space-of-pure-quaternions",
  "level": "2",
  "url": "sec-quaternions.html#def-space-of-pure-quaternions",
  "type": "Definition",
  "number": "2.1.10",
  "title": "Pure quaternions.",
  "body": " Pure quaternions   Let be a field of characteristic different from , and be a quaternion algebra over . The vector subspace of pure quaternions  is a vector subspace of spanned by , i.e.,    "
},
{
  "id": "lem-square-of-pure-quaternion",
  "level": "2",
  "url": "sec-quaternions.html#lem-square-of-pure-quaternion",
  "type": "Lemma",
  "number": "2.1.11",
  "title": "",
  "body": "  Let be a field of characteristic different from , and be a quaternion algebra over . Then,    implies that , and     if and only if and .      "
},
{
  "id": "sec-sec-quaternions",
  "level": "1",
  "url": "sec-sec-quaternions.html",
  "type": "Section",
  "number": "2.2",
  "title": "Reduced trace and reduced norm in Quaternion algebra",
  "body": " Reduced trace and reduced norm in Quaternion algebra   In this section we define the trace and the norm of a quaternion. Throughout this section we assume that is a field of characteristic not and that is a quaternion algebra.     Let . The reduced trace of is and the reduced norm of is , where is the canonical involution (see ).      Suppose that is a field of characteristic not and that is a quaternion algebra.   For , . In fact, if then, .     is an -linear map.         Suppose that is a field of characteristic not and that is a quaternion algebra.   For , we have . In fact, if then, .     is multiplicative, i.e., .    For , we have , i.e., .    An element is invertible if and only if .         Show the following.    and are division algebras;     is not a division algebra;     is not a division algebra.         Let be a quaternion algebra over a field of characteristic . Every satisfy a quadratic polynomial over , viz.,      Indeed,      Suppose that is a field of characteristic not and that is a quaternion algebra. Consider . The map given by is -linear. If is the matrix of with respect to the basis then,   the trace of the matrix , , and    the determinant of the matrix , .        We leave it to the reader to check that the map is -linear, also see . The following is the matrix of with respect to the basis . Thus, . The determinant of the matrix is One may verify that .   "
},
{
  "id": "def-trace-norm-quaternion",
  "level": "2",
  "url": "sec-sec-quaternions.html#def-trace-norm-quaternion",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let . The reduced trace of is and the reduced norm of is , where is the canonical involution (see ).   "
},
{
  "id": "lem-basic-properties-trace",
  "level": "2",
  "url": "sec-sec-quaternions.html#lem-basic-properties-trace",
  "type": "Lemma",
  "number": "2.2.2",
  "title": "",
  "body": "  Suppose that is a field of characteristic not and that is a quaternion algebra.   For , . In fact, if then, .     is an -linear map.      "
},
{
  "id": "lem-basic-properties-norm",
  "level": "2",
  "url": "sec-sec-quaternions.html#lem-basic-properties-norm",
  "type": "Lemma",
  "number": "2.2.3",
  "title": "",
  "body": "  Suppose that is a field of characteristic not and that is a quaternion algebra.   For , we have . In fact, if then, .     is multiplicative, i.e., .    For , we have , i.e., .    An element is invertible if and only if .      "
},
{
  "id": "sec-sec-quaternions-6",
  "level": "2",
  "url": "sec-sec-quaternions.html#sec-sec-quaternions-6",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": "  Show the following.    and are division algebras;     is not a division algebra;     is not a division algebra.      "
},
{
  "id": "lem-quadratic-equation-satisfied-by-quaternion",
  "level": "2",
  "url": "sec-sec-quaternions.html#lem-quadratic-equation-satisfied-by-quaternion",
  "type": "Lemma",
  "number": "2.2.5",
  "title": "",
  "body": "  Let be a quaternion algebra over a field of characteristic . Every satisfy a quadratic polynomial over , viz.,    "
},
{
  "id": "sec-sec-quaternions-8",
  "level": "2",
  "url": "sec-sec-quaternions.html#sec-sec-quaternions-8",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " Indeed,   "
},
{
  "id": "lem-matrix-of-left-multiplication",
  "level": "2",
  "url": "sec-sec-quaternions.html#lem-matrix-of-left-multiplication",
  "type": "Lemma",
  "number": "2.2.6",
  "title": "",
  "body": "  Suppose that is a field of characteristic not and that is a quaternion algebra. Consider . The map given by is -linear. If is the matrix of with respect to the basis then,   the trace of the matrix , , and    the determinant of the matrix , .      "
},
{
  "id": "sec-sec-quaternions-10",
  "level": "2",
  "url": "sec-sec-quaternions.html#sec-sec-quaternions-10",
  "type": "Proof",
  "number": "2.2.2",
  "title": "",
  "body": " We leave it to the reader to check that the map is -linear, also see . The following is the matrix of with respect to the basis . Thus, . The determinant of the matrix is One may verify that .  "
},
{
  "id": "sec-finite-dim-division-over-R",
  "level": "1",
  "url": "sec-finite-dim-division-over-R.html",
  "type": "Section",
  "number": "2.3",
  "title": "Finite-dimensional division algebras over real and complex numbers",
  "body": " Finite-dimensional division algebras over real and complex numbers  We classify finite-dimensional division algebras over . We begin with the following definition.   Finite-dimension division algebra   Let be a field. An -algebra is said to be finite-dimensional division algebra if is finite dimensional as an -vector space, and every nonzero element of is invertible.      Let be a finite-dimensional division algebra over . Then, for every element there exists such that .     Let be an -dimensional division algebra over . Then, the set is linearly dependent over . Thus, there exists , not all zero, such that . We may assume that the polynomial is monic. Over , the polynomial will splits into linear and quadratic factors. Say Using the fact that is in the center of (see ), we get Since is a division algebra, one of the factors is zero. This proves the lemma.   One needs to be careful while evaluating a polynomial over an algebra at an element of the algebra. In fact, we require a definition of evaluation . We will define it later. The following exercise illustrates the point.    Consider the Hamiltonian quaternion algebra . Let and . Then, but , where .      Let be a finite-dimensional division algebra over . Let . Then, is an -vector subspace of , and .     We first observe the following. Indeed, if and then, and hence there exists such that . Thus, , i.e., . Now assume that . We show that . We further assume that are -linearly independent. We claim that are -linearly independent. If there are with then, this will imply that . This implies that either or . One may check that this gives . We have thus shown that are linearly independent. By , there exists such that While . This gives . Since are -linearly independent, we must have . Thus, . Using , we get that .  We leave it to the reader to check that is closed under scalar multiplication. This shows that is an -vector subspace of . Further, check that .  For there exists such that . Note that, using , and hence, . This shows that .     Let be a finite-dimensional division algebra over . If the dimension of is , then there exist such that , , and are linearly independent over .     By , . Suppose that are linearly independent over . Consider the element . Set It is left to the reader to check that defined above satisfies . To check the linear independence of we consider such that . However, implies that for all .    Classification of finite-dimensional division algebras over   A finite-dimensional division algebra over is isomorphic to either , or .     Let , where is a finite-dimensional division algebra over .   If then, .    If then, (see ) and it contains with .    By , the case does not appear and if then, .    Suppose that . By , there are such that and . In particular, . In this case (see ), so there exists which is not in the linear span of . Consider the following nonzero element of . We claim that . Indeed, for any we have (see ), and We get the following relations. This implies that , a contradiction because . Hence, can not be greater than .        There are no proper nontrivial finite-dimentional division algebras over .     Suppose that is a finite-dimensional division algebra over . Let . As is finite-dimensional, is an algebraic element over . Thus, because is an algebraically closed field. This shows that .   "
},
{
  "id": "def-finite-dimensional-division-algebra",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#def-finite-dimensional-division-algebra",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Finite-dimension division algebra.",
  "body": " Finite-dimension division algebra   Let be a field. An -algebra is said to be finite-dimensional division algebra if is finite dimensional as an -vector space, and every nonzero element of is invertible.   "
},
{
  "id": "lem-element-satisfies-quadratic-equation-over-reals",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#lem-element-satisfies-quadratic-equation-over-reals",
  "type": "Lemma",
  "number": "2.3.2",
  "title": "",
  "body": "  Let be a finite-dimensional division algebra over . Then, for every element there exists such that .   "
},
{
  "id": "sec-finite-dim-division-over-R-5",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#sec-finite-dim-division-over-R-5",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " Let be an -dimensional division algebra over . Then, the set is linearly dependent over . Thus, there exists , not all zero, such that . We may assume that the polynomial is monic. Over , the polynomial will splits into linear and quadratic factors. Say Using the fact that is in the center of (see ), we get Since is a division algebra, one of the factors is zero. This proves the lemma.  "
},
{
  "id": "sec-finite-dim-division-over-R-7",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#sec-finite-dim-division-over-R-7",
  "type": "Checkpoint",
  "number": "2.3.3",
  "title": "",
  "body": "  Consider the Hamiltonian quaternion algebra . Let and . Then, but , where .   "
},
{
  "id": "lem-orthogonal-complement-of-reals-in-division-algebra",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#lem-orthogonal-complement-of-reals-in-division-algebra",
  "type": "Lemma",
  "number": "2.3.4",
  "title": "",
  "body": "  Let be a finite-dimensional division algebra over . Let . Then, is an -vector subspace of , and .   "
},
{
  "id": "sec-finite-dim-division-over-R-9",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#sec-finite-dim-division-over-R-9",
  "type": "Proof",
  "number": "2.3.2",
  "title": "",
  "body": " We first observe the following. Indeed, if and then, and hence there exists such that . Thus, , i.e., . Now assume that . We show that . We further assume that are -linearly independent. We claim that are -linearly independent. If there are with then, this will imply that . This implies that either or . One may check that this gives . We have thus shown that are linearly independent. By , there exists such that While . This gives . Since are -linearly independent, we must have . Thus, . Using , we get that .  We leave it to the reader to check that is closed under scalar multiplication. This shows that is an -vector subspace of . Further, check that .  For there exists such that . Note that, using , and hence, . This shows that .  "
},
{
  "id": "lem-existence-of-i-j-k-in-division-algebra",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#lem-existence-of-i-j-k-in-division-algebra",
  "type": "Lemma",
  "number": "2.3.5",
  "title": "",
  "body": "  Let be a finite-dimensional division algebra over . If the dimension of is , then there exist such that , , and are linearly independent over .   "
},
{
  "id": "sec-finite-dim-division-over-R-11",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#sec-finite-dim-division-over-R-11",
  "type": "Proof",
  "number": "2.3.3",
  "title": "",
  "body": " By , . Suppose that are linearly independent over . Consider the element . Set It is left to the reader to check that defined above satisfies . To check the linear independence of we consider such that . However, implies that for all .  "
},
{
  "id": "thm-division-algebras-over-R",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#thm-division-algebras-over-R",
  "type": "Theorem",
  "number": "2.3.6",
  "title": "Classification of finite-dimensional division algebras over <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Classification of finite-dimensional division algebras over   A finite-dimensional division algebra over is isomorphic to either , or .   "
},
{
  "id": "sec-finite-dim-division-over-R-13",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#sec-finite-dim-division-over-R-13",
  "type": "Proof",
  "number": "2.3.4",
  "title": "",
  "body": " Let , where is a finite-dimensional division algebra over .   If then, .    If then, (see ) and it contains with .    By , the case does not appear and if then, .    Suppose that . By , there are such that and . In particular, . In this case (see ), so there exists which is not in the linear span of . Consider the following nonzero element of . We claim that . Indeed, for any we have (see ), and We get the following relations. This implies that , a contradiction because . Hence, can not be greater than .     "
},
{
  "id": "lem-division-algebras-over-C",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#lem-division-algebras-over-C",
  "type": "Lemma",
  "number": "2.3.7",
  "title": "",
  "body": "  There are no proper nontrivial finite-dimentional division algebras over .   "
},
{
  "id": "sec-finite-dim-division-over-R-15",
  "level": "2",
  "url": "sec-finite-dim-division-over-R.html#sec-finite-dim-division-over-R-15",
  "type": "Proof",
  "number": "2.3.5",
  "title": "",
  "body": " Suppose that is a finite-dimensional division algebra over . Let . As is finite-dimensional, is an algebraic element over . Thus, because is an algebraically closed field. This shows that .  "
},
{
  "id": "sec-quadratic-space-associated-to-quaternion-algebra",
  "level": "1",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html",
  "type": "Section",
  "number": "2.4",
  "title": "Quadratic space associated to quaternion algebra",
  "body": " Quadratic space associated to quaternion algebra   Throughout this section we assume that is a field with . The set of nonzero elements of is denoted by .    Symmetric bilinear form associated to quaternion algebra   Let be a quaternion algebra over . The following map is a symmetric bilinear form associated to .      Quadratic form associated to quaternion algebra   We keep notations of above. The quadratic form  associated to is given by for .      For , we get that . In particular,      Matrix associated to   Keep notations of . The matrix associated to is the following matrix.      Regular\/nonsingular quadratic form   Keep notations of . The quadratic form or the symmetric bilinear form is said to be regular or nonsingular if the matrix associated to is invertible.      Keep notations of . The matrix associated to is a diagonal matrix , and is regular.     An easy calculations show that is an orthogonal basis with respect to . Hence, the matrix associated to is a diagonal matrix. More precisely, we get the following. As , we get that is regular.      Let be a field of characteristic different from . Suppose that and are quaternion algebras over . Then, as an -algebras if and only if there exists an -linear isomorphism such that for all .     We use without explicit mention. We also denote the canonical involution on both and by .  Suppose that is an -algebra isomophism. For , as . Furthermore, implies that . We thus get that for every . Therefore, is an -linear map from to . As is injective, the map is injective as well. Now assume that . Then there exists some such that . As and we get that and that , i.e., for some . Thus, , i.e., . Hence, and thus, is surjective as well. It follows that is an -isomorphism. Finally for , we have and thus, .  Now assume there is an -linear isomorphism such that for all . Define by , , , and . Extend linearly to all . The reader may check that is an -algebra isomorphism. Here we only check that . First observe the following. On the other hand, Therefore, Using and the associated symmetric bilinear form we get the following. This shows that .     Let be a field of characteristic . For ,      We use . Put and . We assume that (resp., ) is generated by (resp., ). Define by Thus, for every . Hence, . Similarly, one can show that .   "
},
{
  "id": "def-symmetric-bilinear-form-associated-to-quaternion-algebra",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#def-symmetric-bilinear-form-associated-to-quaternion-algebra",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Symmetric bilinear form associated to quaternion algebra.",
  "body": " Symmetric bilinear form associated to quaternion algebra   Let be a quaternion algebra over . The following map is a symmetric bilinear form associated to .    "
},
{
  "id": "def-quadratic-form-associated-to-quaternion-algebra",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#def-quadratic-form-associated-to-quaternion-algebra",
  "type": "Definition",
  "number": "2.4.2",
  "title": "Quadratic form associated to quaternion algebra.",
  "body": " Quadratic form associated to quaternion algebra   We keep notations of above. The quadratic form  associated to is given by for .   "
},
{
  "id": "note-reduced-norm-as-associated-quadratic-form",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#note-reduced-norm-as-associated-quadratic-form",
  "type": "Note",
  "number": "2.4.3",
  "title": "",
  "body": "  For , we get that . In particular,    "
},
{
  "id": "def-matrix-associated-to-norm-form",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#def-matrix-associated-to-norm-form",
  "type": "Definition",
  "number": "2.4.4",
  "title": "Matrix associated to <span class=\"process-math\">\\(b_Q\\)<\/span>.",
  "body": " Matrix associated to   Keep notations of . The matrix associated to is the following matrix.    "
},
{
  "id": "def-regular-quadratic-form",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#def-regular-quadratic-form",
  "type": "Definition",
  "number": "2.4.5",
  "title": "Regular\/nonsingular quadratic form.",
  "body": " Regular\/nonsingular quadratic form   Keep notations of . The quadratic form or the symmetric bilinear form is said to be regular or nonsingular if the matrix associated to is invertible.   "
},
{
  "id": "lem-matrix-associated-to-norm-form-is-diagonal",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#lem-matrix-associated-to-norm-form-is-diagonal",
  "type": "Lemma",
  "number": "2.4.6",
  "title": "",
  "body": "  Keep notations of . The matrix associated to is a diagonal matrix , and is regular.   "
},
{
  "id": "sec-quadratic-space-associated-to-quaternion-algebra-9",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#sec-quadratic-space-associated-to-quaternion-algebra-9",
  "type": "Proof",
  "number": "2.4.1",
  "title": "",
  "body": " An easy calculations show that is an orthogonal basis with respect to . Hence, the matrix associated to is a diagonal matrix. More precisely, we get the following. As , we get that is regular.  "
},
{
  "id": "thm-isomorphism-of-quaternion-algebra-with-associated-quadratic-space",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#thm-isomorphism-of-quaternion-algebra-with-associated-quadratic-space",
  "type": "Theorem",
  "number": "2.4.7",
  "title": "",
  "body": "  Let be a field of characteristic different from . Suppose that and are quaternion algebras over . Then, as an -algebras if and only if there exists an -linear isomorphism such that for all .   "
},
{
  "id": "sec-quadratic-space-associated-to-quaternion-algebra-11",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#sec-quadratic-space-associated-to-quaternion-algebra-11",
  "type": "Proof",
  "number": "2.4.2",
  "title": "",
  "body": " We use without explicit mention. We also denote the canonical involution on both and by .  Suppose that is an -algebra isomophism. For , as . Furthermore, implies that . We thus get that for every . Therefore, is an -linear map from to . As is injective, the map is injective as well. Now assume that . Then there exists some such that . As and we get that and that , i.e., for some . Thus, , i.e., . Hence, and thus, is surjective as well. It follows that is an -isomorphism. Finally for , we have and thus, .  Now assume there is an -linear isomorphism such that for all . Define by , , , and . Extend linearly to all . The reader may check that is an -algebra isomorphism. Here we only check that . First observe the following. On the other hand, Therefore, Using and the associated symmetric bilinear form we get the following. This shows that .  "
},
{
  "id": "cor-isomorphism-of-quaternions-upto-sqaures",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#cor-isomorphism-of-quaternions-upto-sqaures",
  "type": "Corollary",
  "number": "2.4.8",
  "title": "",
  "body": "  Let be a field of characteristic . For ,    "
},
{
  "id": "sec-quadratic-space-associated-to-quaternion-algebra-13",
  "level": "2",
  "url": "sec-quadratic-space-associated-to-quaternion-algebra.html#sec-quadratic-space-associated-to-quaternion-algebra-13",
  "type": "Proof",
  "number": "2.4.3",
  "title": "",
  "body": " We use . Put and . We assume that (resp., ) is generated by (resp., ). Define by Thus, for every . Hence, . Similarly, one can show that .  "
},
{
  "id": "ws-quaternion-algebras",
  "level": "1",
  "url": "ws-quaternion-algebras.html",
  "type": "Worksheet",
  "number": "2.5",
  "title": "Exercises related to quaternion algebras",
  "body": " Exercises related to quaternion algebras   Most of the exercises are taken from and . Throughout this worksheet we assume that is a field with . The set of nonzero elements of is denoted by .     Show that the following conditions on are equivalent.    is a division algebra;     for all nonzero ;     and          Let be a finite field, and .   Show that there are such that .    Show that is not a division algebra.       Show that the values taken by and as ranges over can not be all different.      Following steps outlined below show that is isomorphic to the real subalgebra of consisting of the matrices , where .     Show that is a right -vector space with a basis .    Prove that for any , the left regular representation given by is a -linear map. Furthermore, show that is an -algebra homomorphism.    Show that is a faithful representation of the -algebra , i.e., is injective.    Compute matrices of , and with respect to the basis . Then, conclude that for , where , we have          Show that there are infinite many with .      Let be a quaternion algebra over . Consider and given by    Show that and are -vector subspaces of .    Find vector space dimension of and .    Show that .       "
},
{
  "id": "ws-quaternion-algebras-3",
  "level": "2",
  "url": "ws-quaternion-algebras.html#ws-quaternion-algebras-3",
  "type": "Worksheet Exercise",
  "number": "2.5.1",
  "title": "",
  "body": "  Show that the following conditions on are equivalent.    is a division algebra;     for all nonzero ;     and       "
},
{
  "id": "ws-quaternion-algebras-4",
  "level": "2",
  "url": "ws-quaternion-algebras.html#ws-quaternion-algebras-4",
  "type": "Worksheet Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "  Let be a finite field, and .   Show that there are such that .    Show that is not a division algebra.       Show that the values taken by and as ranges over can not be all different.   "
},
{
  "id": "ws-quaternion-algebras-5",
  "level": "2",
  "url": "ws-quaternion-algebras.html#ws-quaternion-algebras-5",
  "type": "Worksheet Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "  Following steps outlined below show that is isomorphic to the real subalgebra of consisting of the matrices , where .     Show that is a right -vector space with a basis .    Prove that for any , the left regular representation given by is a -linear map. Furthermore, show that is an -algebra homomorphism.    Show that is a faithful representation of the -algebra , i.e., is injective.    Compute matrices of , and with respect to the basis . Then, conclude that for , where , we have       "
},
{
  "id": "ws-quaternion-algebras-6",
  "level": "2",
  "url": "ws-quaternion-algebras.html#ws-quaternion-algebras-6",
  "type": "Worksheet Exercise",
  "number": "2.5.4",
  "title": "",
  "body": "  Show that there are infinite many with .   "
},
{
  "id": "ws-quaternion-algebras-7",
  "level": "2",
  "url": "ws-quaternion-algebras.html#ws-quaternion-algebras-7",
  "type": "Worksheet Exercise",
  "number": "2.5.5",
  "title": "",
  "body": "  Let be a quaternion algebra over . Consider and given by    Show that and are -vector subspaces of .    Find vector space dimension of and .    Show that .      "
},
{
  "id": "sec-change-of-scalars",
  "level": "1",
  "url": "sec-change-of-scalars.html",
  "type": "Section",
  "number": "3.1",
  "title": "Change of scalars",
  "body": " Change of scalars   Throughout this section we assume that is a commutative ring with unity, and that is a nonzero unital right -algebra. All -algebras will be right -algebras unless otherwise stated.     Suppose that and are right -algebras. Let be an -algebra homomorphism. Let be a right -module. We can make a right -module by defining We denote by the right -module with this action. The process of obtaining the right -module from the right -module is called change of scalars from to via the homomorphism .      Let be an -algebra homomorphism, and let and be right -modules.   Direct sum and right -module action commutes with each other:     If then, . Furthermore, if is surjective then, .    If then, . If is surjective then, the sets and of the submodules of and respectively, are equal.        Annihilator of a module and faithful module   Let be a nonzero -algebra and be a right -module. Let . The annihilator of in is defined as If then, we say that is a faithful right -module.  If then, we write instead of .      Let , and be right -modules. Suppose that and . We have the following:    is a right ideal of . If is a submodule of then, is a two-sided ideal of .    If then, .    If then, .    If then, .    If is a right ideal of then, is the largest two-sided ideal of contained in .        Minimal polynomial of a linear transformation as a generator of an annihilator   Let be a finite-dimensional vector space over a field , and be an -linear transformation. Let be the polynomial ring in one variable over . We can make a right -module by defining The annihilator of in is a nonzero ideal of because is finite-dimensional. As is a principal ideal domain, there exists a unique monic polynomial such that . The polynomial is called the minimal polynomial of the linear transformation .     Modules over simple algebras are faithful   Let be a finite-dimension simple -algebra, see . If is a nonzero right -module then, is a faithful right -module. Indeed, by , is a two-sided ideal of . As is simple, either or . If then, for every . This implies that , which is a contradiction. Hence, .      Let be a right -module, and let be a nonzero element. Consider a submodule of generated by . The map defined by is a surjective homomorphism of right -modules. By the first isomorphism theorem, we have that . As , we conclude that       Let be -algebras, and a surjective -algebra homomorphism. If is a right -module then, there exists a right -module such that if and only if .      Let be a two-sided ideal of an -algebra , and is a right -module. The module is a faithful right -module if and only if .    "
},
{
  "id": "def-change-of-scalars",
  "level": "2",
  "url": "sec-change-of-scalars.html#def-change-of-scalars",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  Suppose that and are right -algebras. Let be an -algebra homomorphism. Let be a right -module. We can make a right -module by defining We denote by the right -module with this action. The process of obtaining the right -module from the right -module is called change of scalars from to via the homomorphism .   "
},
{
  "id": "lem-change-of-scalars-under-direct-sums-Hom",
  "level": "2",
  "url": "sec-change-of-scalars.html#lem-change-of-scalars-under-direct-sums-Hom",
  "type": "Lemma",
  "number": "3.1.2",
  "title": "",
  "body": "  Let be an -algebra homomorphism, and let and be right -modules.   Direct sum and right -module action commutes with each other:     If then, . Furthermore, if is surjective then, .    If then, . If is surjective then, the sets and of the submodules of and respectively, are equal.      "
},
{
  "id": "def-annihilator-of-module",
  "level": "2",
  "url": "sec-change-of-scalars.html#def-annihilator-of-module",
  "type": "Definition",
  "number": "3.1.3",
  "title": "Annihilator of a module and faithful module.",
  "body": " Annihilator of a module and faithful module   Let be a nonzero -algebra and be a right -module. Let . The annihilator of in is defined as If then, we say that is a faithful right -module.  If then, we write instead of .   "
},
{
  "id": "lem-annihilator-of-module-is-ideal",
  "level": "2",
  "url": "sec-change-of-scalars.html#lem-annihilator-of-module-is-ideal",
  "type": "Lemma",
  "number": "3.1.4",
  "title": "",
  "body": "  Let , and be right -modules. Suppose that and . We have the following:    is a right ideal of . If is a submodule of then, is a two-sided ideal of .    If then, .    If then, .    If then, .    If is a right ideal of then, is the largest two-sided ideal of contained in .      "
},
{
  "id": "ex-minimal-polynomial-of-linear-transformation-as-generator-of-annihilator",
  "level": "2",
  "url": "sec-change-of-scalars.html#ex-minimal-polynomial-of-linear-transformation-as-generator-of-annihilator",
  "type": "Example",
  "number": "3.1.5",
  "title": "Minimal polynomial of a linear transformation as a generator of an annihilator.",
  "body": " Minimal polynomial of a linear transformation as a generator of an annihilator   Let be a finite-dimensional vector space over a field , and be an -linear transformation. Let be the polynomial ring in one variable over . We can make a right -module by defining The annihilator of in is a nonzero ideal of because is finite-dimensional. As is a principal ideal domain, there exists a unique monic polynomial such that . The polynomial is called the minimal polynomial of the linear transformation .   "
},
{
  "id": "ex-modules-over-simple-algebras-are-faithful",
  "level": "2",
  "url": "sec-change-of-scalars.html#ex-modules-over-simple-algebras-are-faithful",
  "type": "Example",
  "number": "3.1.6",
  "title": "Modules over simple algebras are faithful.",
  "body": " Modules over simple algebras are faithful   Let be a finite-dimension simple -algebra, see . If is a nonzero right -module then, is a faithful right -module. Indeed, by , is a two-sided ideal of . As is simple, either or . If then, for every . This implies that , which is a contradiction. Hence, .   "
},
{
  "id": "sec-change-of-scalars-9",
  "level": "2",
  "url": "sec-change-of-scalars.html#sec-change-of-scalars-9",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "  Let be a right -module, and let be a nonzero element. Consider a submodule of generated by . The map defined by is a surjective homomorphism of right -modules. By the first isomorphism theorem, we have that . As , we conclude that    "
},
{
  "id": "prop-collections-of-modules-after-change-of-scalars",
  "level": "2",
  "url": "sec-change-of-scalars.html#prop-collections-of-modules-after-change-of-scalars",
  "type": "Proposition",
  "number": "3.1.8",
  "title": "",
  "body": "  Let be -algebras, and a surjective -algebra homomorphism. If is a right -module then, there exists a right -module such that if and only if .   "
},
{
  "id": "cor-collections-of-modules-after-change-of-scalars-modulo-ideal",
  "level": "2",
  "url": "sec-change-of-scalars.html#cor-collections-of-modules-after-change-of-scalars-modulo-ideal",
  "type": "Corollary",
  "number": "3.1.9",
  "title": "",
  "body": "  Let be a two-sided ideal of an -algebra , and is a right -module. The module is a faithful right -module if and only if .   "
},
{
  "id": "sec-simple-modules",
  "level": "1",
  "url": "sec-simple-modules.html",
  "type": "Section",
  "number": "3.2",
  "title": "Simple modules",
  "body": " Simple modules   We define simple modules and study some of their properties. We begin with the definition of cyclic modules . Throughout this section, we assume that is a commutative ring with unity and all modules are right -modules.    Cyclic module   Let be an -algebra and be a right -module. We say that is a cyclic module if there exists such that .      Let be an -algebra and be a right -module which is cyclic. Then,    .    If is a right ideal of then, is a cyclic right -module.    Let be a right ideal of . Put . Then, is a subalgebra of containing . Furthermore, as right -modules.           Suppose that . Define a map by . As is cyclic, the map is surjective and its kernel is precisely . The first isomorphism theorem for modules gives the required isomorphism.    Checking is a right -module is left to the reader. Consider the submodule of generated by . Given any we have , and therefore, .    We first check that is a subalgebra of containing . For , , and we have As is a right ideal of and hence . This shows that . We leave to the reader to check other conditions for to be a subalgebra of .  Note that is a right -module and so is . As is a subalgebra, is also a right -module. We define by . We check that is a -module homomorphism. For , and we have For consider given by , i.e., coset representative maps to a coset representative . We check the well-definedness of this map. Suppose that , say for some . We obtain the following: Suppose now that for some . We check that . Furthermore, the map is -linear. Indeed, for we have Therefore, we ge the map given by . One may check that and are mutually inverse homomorphisms of -modules.      "
},
{
  "id": "def-cyclic-module",
  "level": "2",
  "url": "sec-simple-modules.html#def-cyclic-module",
  "type": "Definition",
  "number": "3.2.1",
  "title": "Cyclic module.",
  "body": " Cyclic module   Let be an -algebra and be a right -module. We say that is a cyclic module if there exists such that .   "
},
{
  "id": "lem-cyclic-module-and-annihilator",
  "level": "2",
  "url": "sec-simple-modules.html#lem-cyclic-module-and-annihilator",
  "type": "Lemma",
  "number": "3.2.2",
  "title": "",
  "body": "  Let be an -algebra and be a right -module which is cyclic. Then,    .    If is a right ideal of then, is a cyclic right -module.    Let be a right ideal of . Put . Then, is a subalgebra of containing . Furthermore, as right -modules.      "
},
{
  "id": "sec-simple-modules-5",
  "level": "2",
  "url": "sec-simple-modules.html#sec-simple-modules-5",
  "type": "Proof",
  "number": "3.2.1",
  "title": "",
  "body": "    Suppose that . Define a map by . As is cyclic, the map is surjective and its kernel is precisely . The first isomorphism theorem for modules gives the required isomorphism.    Checking is a right -module is left to the reader. Consider the submodule of generated by . Given any we have , and therefore, .    We first check that is a subalgebra of containing . For , , and we have As is a right ideal of and hence . This shows that . We leave to the reader to check other conditions for to be a subalgebra of .  Note that is a right -module and so is . As is a subalgebra, is also a right -module. We define by . We check that is a -module homomorphism. For , and we have For consider given by , i.e., coset representative maps to a coset representative . We check the well-definedness of this map. Suppose that , say for some . We obtain the following: Suppose now that for some . We check that . Furthermore, the map is -linear. Indeed, for we have Therefore, we ge the map given by . One may check that and are mutually inverse homomorphisms of -modules.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "References",
  "number": "",
  "title": "Bibliography",
  "body": " Bibliography  Lam, T. Y., Introduction to quadratic forms over fields , Graduate Studies in Mathematics, Volume 67, American Mathematical Society (AMS), Providence, RI, 2005 .  Pierce, Richard S., Associative algebras , Graduate Texts in Mathematics, Volume 88, Springer, Cham, 1982 .   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
