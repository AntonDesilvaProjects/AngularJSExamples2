# AngularJSExamples2


<select id="getStuff" resultMap="kyc">
		SELECT * FROM test_tasks;
	</select>
	<resultMap id="kyc" type="Runbook">
		<result property = "id" column = "task_id"/>
		<collection property="tasks" ofType="Task">
			<result property = "attribute" column = "attribute"/>
			<result property = "activity" column = "activity"/>
		</collection>
	</resultMap>
