image_dataset_comment_1 = `
<span class=\"commentText\"># A prerequisite to use this Coreset is to extract the features embeddings 
# from your images. In order to do so, drop the last classification layer 
# from your pre-trained network, so the output would be the embeddings instead 
# of the class distribution.

# To see how we extracted the feature embeddings from the ImageNet dataset 
# using ResNet18 and PyTorch, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/feature_extraction_scripts/feature_extraction_imagenet1k_resnet18_pytorch.py\">link</a>.

# To see how we extracted the feature embeddings from the CIFAR10 dataset 
# using ResNet18 and TensorFlow /Keras, visit this <a target=\"_blank\" href=https://github.com/Data-Heroes/dataheroes/blob/master/examples/feature_extraction_scripts/feature_extraction_cifar10_resnet18_tensorflow_keras.py">link</a>.
</span>
`

const algToClass = {
        "Linear Regression": 'CoresetTreeServiceLR',
        "Logistic Regression": 'CoresetTreeServiceLG',
        "K-Means": 'CoresetTreeServiceKMeans',
        "PCA": 'CoresetTreeServicePCA',
        "SVD": 'CoresetTreeServiceSVD',
        "Decision trees classification based": 'CoresetTreeServiceDTC',
        "Decision trees regression based": 'CoresetTreeServiceDTR',
        "Deep learning classification": 'CoresetTreeServiceLG',
        "Deep learning regression": 'CoresetTreeServiceLR',
    }

const unsupervisedAlg = ['K-Means', 'PCA', 'SVD'];

const buildComment = `<span class=\"commentText\"># Build the Coreset Tree.
# The Coreset tree uses the local file system to store its data.
# After this step you will have a new directory .dataheroes_cache</span>`

function genBuildFromFile(
            singleMultFilesDirs,
            targetFeaturesSeparate,
            fileTypeSelect,
            partial)
{
    let build_from_npy_file_single_separate = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files. 
# Replace with your directory name and file names. 
# Build the Coreset tree using the read_npy reader.</span>
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
x_train_file = data_dir / <span class=\"highlightText\">'x_train.npy'</span>
y_train_file = data_dir / <span class=\"highlightText\">'y_train.npy'</span>

<span class=\"commentText\"># import reader for NPY format</span>
from dataheroes.data.utils import read_npy

${buildComment}
service_obj.build_from_file(x_train_file, y_train_file, reader_f=read_npy)
`

let partial_build_from_npy_file_single_separate = `
x_train_file_2 = data_dir / <span class=\"highlightText\">'x_train_2.npy'</span>
y_train_file_2 = data_dir / <span class=\"highlightText\">'y_train_2.npy'</span>
service_obj.partial_build_from_file(x_train_file_2, y_train_file_2, reader_f=read_npy)
`

let build_from_csv_file_single_separate = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files. 
# Replace with your directory name and file names.</span>
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span> 
x_train_file = data_dir / <span class=\"highlightText\">'x_train.csv'</span>
y_train_file = data_dir / <span class=\"highlightText\">'y_train.csv'</span>

${buildComment}
service_obj.build_from_file(x_train_file, y_train_file)
`

let partial_build_from_csv_file_single_separate = `
x_train_file_2 = data_dir / <span class=\"highlightText\">'x_train_2.csv'</span>
y_train_file_2 = data_dir / <span class=\"highlightText\">'y_train_2.csv'</span>
service_obj.partial_build_from_file(x_train_file_2, y_train_file_2)
`

let build_from_tsv_file_single_separate = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files. 
# Replace with your directory name and file names.</span>
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span> 
x_train_file = data_dir / <span class=\"highlightText\">'x_train.tsv'</span>
y_train_file = data_dir / <span class=\"highlightText\">'y_train.tsv'</span>

${buildComment}
service_obj.build_from_file(x_train_file, y_train_file, sep='\\t')
`

let partial_build_from_tsv_file_single_separate = `
x_train_file_2 = data_dir / <span class=\"highlightText\">'x_train_2.tsv'</span>
y_train_file_2 = data_dir / <span class=\"highlightText\">'y_train_2.tsv'</span>
service_obj.partial_build_from_file(x_train_file_2, y_train_file_2, sep='\\t')
`

let build_from_npy_file_single = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset file. 
# Replace with your directory name and file name. 
# Build the Coreset tree using the read_npy reader.</span>
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
data_file = data_dir / <span class=\"highlightText\">'data.npy'</span>

<span class=\"commentText\"># import reader for NPY format</span>
from dataheroes.data.utils import read_npy

${buildComment}
service_obj.build_from_file(data_file, reader_f=read_npy)
`

let partial_build_from_npy_file_single = `    
data_file_2 = data_dir / <span class=\"highlightText\">'data_2.npy'</span>
service_obj.partial_build_from_file(data_file_2, reader_f=read_npy)
`

let build_from_csv_file_single = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset file. 
# Replace with your directory name and file name.</span> 
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
data_file = data_dir / <span class=\"highlightText\">'data.csv'</span>

${buildComment}
service_obj.build_from_file(data_file)
`

let partial_build_from_csv_file_single = `
data_file_2 = data_dir / <span class=\"highlightText\">'data_2.csv'</span>
service_obj.partial_build_from_file(data_file_2)
`

let build_from_tsv_file_single = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset file. 
# Replace with your directory name and file name.</span> 
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
data_file = data_dir / <span class=\"highlightText\">'data.tsv'</span>

${buildComment}
service_obj.build_from_file(data_file, sep='\\t')
`

let partial_build_from_tsv_file_single = `
data_file_2 = data_dir / <span class=\"highlightText\">'data_2.tsv'</span>
service_obj.partial_build_from_file(data_file_2, sep='\\t')
`

let build_from_npy_file_mult = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files. 
# Replace with your directory name and file names. 
# Build the Coreset tree using the read_npy reader.</span>
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
data_file1 = data_dir / <span class=\"highlightText\">'data1.npy'</span>
data_file2 = data_dir / <span class=\"highlightText\">'data2.npy'</span>

<span class=\"commentText\"># import reader for NPY format</span>
from dataheroes.data.utils import read_npy

${buildComment}
service_obj.build_from_file([data_file1, data_file2], reader_f=read_npy)
`

let partial_build_from_npy_file_mult = `
data_file1_2 = data_dir / <span class=\"highlightText\">'data1_2.npy'</span>
data_file2_2 = data_dir / <span class=\"highlightText\">'data2_2.npy'</span>
service_obj.partial_build_from_file([data_file1_2, data_file2_2], reader_f=read_npy)
`

let build_from_csv_file_mult = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files.
# Replace with your directory name and file names.</span> 
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
data_file1 = data_dir / <span class=\"highlightText\">'data1.npy'</span>
data_file2 = data_dir / <span class=\"highlightText\">'data2.npy'</span>

${buildComment}
service_obj.build_from_file([data_file1, data_file2])
`

let partial_build_from_csv_file_mult = `
data_file1_2 = data_dir / <span class=\"highlightText\">'data1_2.npy'</span>
data_file2_2 = data_dir / <span class=\"highlightText\">'data2_2.npy'</span>
service_obj.partial_build_from_file([data_file1_2, data_file2_2])
`

let build_from_tsv_file_mult = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files. 
# Replace with your directory name and file names.</span>
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
data_file1 = data_dir / <span class=\"highlightText\">'data1.npy'</span>
data_file2 = data_dir / <span class=\"highlightText\">'data2.npy'</span>

${buildComment}
service_obj.build_from_file([data_file1, data_file2], sep='\\t')
`

let partial_build_from_tsv_file_mult = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files. 
# Replace with your directory name and file names.</span> 
data_file1_2 = data_dir / <span class=\"highlightText\">'data1_2.npy'</span>
data_file2_2 = data_dir / <span class=\"highlightText\">'data2_2.npy'</span>
service_obj.partial_build_from_file([data_file1_2, data_file2_2], sep='\\t')
`

let build_from_npy_file_mult_separate = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files. 
# Replace with your directory name and file names. 
# Build the Coreset tree using the read_npy reader.</span>
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
x_train_file1 = data_dir / <span class=\"highlightText\">'x_train1.npy'</span>
x_train_file2 = data_dir / <span class=\"highlightText\">'x_train2.npy'</span>
y_train_file1 = data_dir / <span class=\"highlightText\">'y_train1.npy'</span>
y_train_file2 = data_dir / <span class=\"highlightText\">'y_train2.npy'</span>

<span class=\"commentText\"># import reader for NPY format</span>
from dataheroes.data.utils import read_npy

${buildComment}
service_obj.build_from_file([x_train_file1, x_train_file2], [y_train_file1, y_train_file2], reader_f=read_npy)
`

let partial_build_from_npy_file_mult_separate = `
x_train_file1_2 = data_dir / <span class=\"highlightText\">'x_train1_2.npy'</span>
x_train_file2_2 = data_dir / <span class=\"highlightText\">'x_train2_2.npy'</span>
y_train_file1_2 = data_dir / <span class=\"highlightText\">'y_train1_2.npy'</span>
y_train_file2_2 = data_dir / <span class=\"highlightText\">'y_train2_2.npy'</span>
service_obj.partial_build_from_file([x_train_file1_2, x_train_file2_2], [y_train_file1_2, y_train_file2_2], reader_f=read_npy)
`

let build_from_csv_file_mult_separate = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files. 
# Replace with your directory name and file names.</span> 
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
x_train_file1 = data_dir / <span class=\"highlightText\">'x_train1.csv'</span>
x_train_file2 = data_dir / <span class=\"highlightText\">'x_train2.csv'</span>
y_train_file1 = data_dir / <span class=\"highlightText\">'y_train1.csv'</span>
y_train_file2 = data_dir / <span class=\"highlightText\">'y_train2.csv'</span>

${buildComment}
service_obj.build_from_file([x_train_file1, x_train_file2], [y_train_file1, y_train_file2])
`

let partial_build_from_csv_file_mult_separate = `
x_train_file1_2 = data_dir / <span class=\"highlightText\">'x_train1_2.csv'</span>
x_train_file2_2 = data_dir / <span class=\"highlightText\">'x_train2_2.csv'</span>
y_train_file1_2 = data_dir / <span class=\"highlightText\">'y_train1_2.csv'</span>
y_train_file2_2 = data_dir / <span class=\"highlightText\">'y_train2_2.csv'</span>
service_obj.partial_build_from_file([x_train_file1_2, x_train_file2_2], [y_train_file1_2, y_train_file2_2])
`

let build_from_tsv_file_mult_separate = `
<span class=\"commentText\"># Prepare the definitions of path variables for the dataset files. 
# Replace with your directory name and file names.</span> 
from pathlib import Path
data_dir: Path = <span class=\"highlightText\">'dataset'</span>
x_train_file1 = data_dir / <span class=\"highlightText\">'x_train1.tsv'</span>
x_train_file2 = data_dir / <span class=\"highlightText\">'x_train2.tsv'</span>
y_train_file1 = data_dir / <span class=\"highlightText\">'y_train1.tsv'</span>
y_train_file2 = data_dir / <span class=\"highlightText\">'y_train2.tsv'</span>

${buildComment}
service_obj.build_from_file([x_train_file1, x_train_file2], [y_train_file1, y_train_file2], sep='\\t')
`
let partial_build_from_tsv_file_mult_separate = `
x_train_file1_2 = data_dir / <span class=\"highlightText\">'x_train1_2.tsv'</span>
x_train_file2_2 = data_dir / <span class=\"highlightText\">'x_train2_2.tsv'</span>
y_train_file1_2 = data_dir / <span class=\"highlightText\">'y_train1_2.tsv'</span>
y_train_file2_2 = data_dir / <span class=\"highlightText\">'y_train2_2.tsv'</span>
service_obj.partial_build_from_file([x_train_file1_2, x_train_file2_2], [y_train_file1_2, y_train_file2_2], sep='\\t')
`

let build_from_dir_single = `
<span class=\"commentText\"># Prepare the data directory. Replace with your directory name. 
# The Coreset tree will be built from all files in the directory.</span>
from pathlib import Path
data_dir = Path("<span class=\"highlightText\">data_dir</span>")

${buildComment}
service_obj.build_from_file(data_dir)
`

let partial_build_from_dir_single = `
data_dir_2 = Path("<span class=\"highlightText\">data_dir_2</span>")
service_obj.partial_build_from_file(data_dir_2)
`

let build_from_dir_single_separate = `
<span class=\"commentText\"># Prepare the data and target directories. Replace with your directory names. 
# The Coreset tree will be built from all files in the directories.</span>
from pathlib import Path
data_dir = Path("<span class=\"highlightText\">data_dir</span>")
target_dir = Path("<span class=\"highlightText\">target_dir</span>")

${buildComment}
service_obj.build_from_file(file_path=data_dir, target_file_path=target_dir)
`

let partial_build_from_dir_single_separate = `
data_dir_2 = Path("<span class=\"highlightText\">data_dir_2</span>")
target_dir_2 = Path("<span class=\"highlightText\">target_dir_2</span>")
service_obj.partial_build_from_file(file_path=data_dir_2, target_file_path=target_dir_2)
`

let build_from_dir_mult = `
<span class=\"commentText\"># Prepare the data directories. Replace with your directory names. 
# The Coreset tree will be built from all files in the directories.</span>
from pathlib import Path
data_dir1 = Path("<span class=\"highlightText\">data_dir1</span>")
data_dir2 = Path("<span class=\"highlightText\">data_dir2</span>")

${buildComment}
service_obj.build_from_file(file_path=[data_dir1, data_dir2]])
`

let partial_build_from_dir_mult = `
data_dir1_2 = Path("<span class=\"highlightText\">data_dir1_2</span>")
data_dir2_2 = Path("<span class=\"highlightText\">data_dir2_2</span>")
service_obj.partial_build_from_file(file_path=[data_dir1_2, data_dir2_2]])
`

let build_from_dir_mult_separate = `
<span class=\"commentText\"># Prepare the data and target directories. Replace with your directory names. 
# The Coreset tree will be built from all files in the directories.</span>
from pathlib import Path
data_dir1 = Path("<span class=\"highlightText\">data_dir1</span>")
data_dir2 = Path("<span class=\"highlightText\">data_dir2</span>")
target_dir1 = Path("<span class=\"highlightText\">target_dir1</span>")
target_dir2 = Path("<span class=\"highlightText\">target_dir2</span>")

${buildComment}
service_obj.build_from_file(file_path=[data_dir1, data_dir2], target_file_path=[target_dir1, target_dir2])
`

let partial_build_from_dir_mult_separate = `
data_dir1_2 = Path("<span class=\"highlightText\">data_dir1_2</span>")
data_dir2_2 = Path("<span class=\"highlightText\">data_dir2_2</span>")
target_dir1_2 = Path("<span class=\"highlightText\">target_dir1_2</span>")
target_dir2_2 = Path("<span class=\"highlightText\">target_dir2_2</span>")
service_obj.partial_build_from_file(file_path=[data_dir1_2, data_dir2_2], target_file_path=[target_dir1_2, target_dir2_2])
`

    let codeSnippetText = partial ? `<span class=\"commentText\"># Add additional data to the Coreset tree.
# The Coreset tree is automatically updated to reflect the old and newly added data, 
# allowing models to be retrained quickly, to overcome model degradation.</span>` : '';

    if (singleMultFilesDirs === 'Single Directory' && targetFeaturesSeparate === 'No') {
        codeSnippetText += partial ? partial_build_from_dir_single : build_from_dir_single;
    } else if (singleMultFilesDirs === 'Single Directory' && targetFeaturesSeparate === 'Yes') {
        codeSnippetText += partial ? partial_build_from_dir_single_separate : build_from_dir_single_separate
    } else if (singleMultFilesDirs === 'Multiple Directories' && targetFeaturesSeparate === 'No') {
        codeSnippetText += partial ? partial_build_from_dir_mult : build_from_dir_mult
    } else if (singleMultFilesDirs === 'Multiple Directories' && targetFeaturesSeparate === 'Yes') {
        codeSnippetText += partial ? partial_build_from_dir_mult_separate : build_from_dir_mult_separate
    } else if (singleMultFilesDirs === 'Single File' && targetFeaturesSeparate === 'Yes' && fileTypeSelect == 'NPY') {
        codeSnippetText += partial ? partial_build_from_npy_file_single_separate : build_from_npy_file_single_separate;
    } else if (singleMultFilesDirs === 'Single File' && targetFeaturesSeparate === 'Yes' && fileTypeSelect == 'TSV') {
        codeSnippetText += partial ? partial_build_from_tsv_file_single_separate : build_from_tsv_file_single_separate;
    } else if (singleMultFilesDirs === 'Single File' && targetFeaturesSeparate === 'Yes' && fileTypeSelect == 'CSV') {
        codeSnippetText += partial ? partial_build_from_csv_file_single_separate : build_from_csv_file_single_separate;
    } else if (singleMultFilesDirs === 'Single File' && targetFeaturesSeparate === 'No' && fileTypeSelect == 'NPY') {
        codeSnippetText += partial ? partial_build_from_npy_file_single : build_from_npy_file_single;
    } else if (singleMultFilesDirs === 'Single File' && targetFeaturesSeparate === 'No' && fileTypeSelect == 'TSV') {
        codeSnippetText += partial ? partial_build_from_tsv_file_single : build_from_tsv_file_single;
    } else if (singleMultFilesDirs === 'Single File' && targetFeaturesSeparate === 'No' && fileTypeSelect == 'CSV') {
        codeSnippetText += partial ? partial_build_from_csv_file_single : build_from_csv_file_single;
    } else if (singleMultFilesDirs === 'Multiple Files' && targetFeaturesSeparate === 'No' && fileTypeSelect == 'NPY') {
        codeSnippetText += partial ? partial_build_from_npy_file_mult : build_from_npy_file_mult;
    } else if (singleMultFilesDirs === 'Multiple Files' && targetFeaturesSeparate === 'No' && fileTypeSelect == 'TSV') {
        codeSnippetText += partial ? partial_build_from_tsv_file_mult : build_from_tsv_file_mult;
    } else if (singleMultFilesDirs === 'Multiple Files' && targetFeaturesSeparate === 'No' && fileTypeSelect == 'CSV') {
        codeSnippetText += partial ? partial_build_from_csv_file_mult : build_from_csv_file_mult;
    } else if (singleMultFilesDirs === 'Multiple Files' && targetFeaturesSeparate === 'Yes' && fileTypeSelect == 'NPY') {
        codeSnippetText += partial ? partial_build_from_npy_file_mult_separate : build_from_npy_file_mult_separate;
    } else if (singleMultFilesDirs === 'Multiple Files' && targetFeaturesSeparate === 'Yes' && fileTypeSelect == 'TSV') {
        codeSnippetText += partial ? partial_build_from_tsv_file_mult_separate : build_from_tsv_file_mult_separate;
    } else if (singleMultFilesDirs === 'Multiple Files' && targetFeaturesSeparate === 'Yes' && fileTypeSelect == 'CSV') {
        codeSnippetText += partial ? partial_build_from_csv_file_mult_separate : build_from_csv_file_mult_separate;
    }
    return codeSnippetText;
}


function genBuildFromDF(targetFeaturesSeparateDF, singleMultDF, partial) {
    let df_params = '';
    if (targetFeaturesSeparateDF === 'No' && singleMultDF === 'Single DataFrame') {
        df_params = `datasets=<span class=\"highlightText\">df${partial ? '_2' : ''}</span>`;
    } else if (targetFeaturesSeparateDF === 'No' && singleMultDF === 'Multiple DataFrames') {
        df_params = `datasets=<span class=\"highlightText\">[df1${partial ? '_2' : ''}, df2${partial ? '_2' : ''}]</span>`;
    } else if (targetFeaturesSeparateDF === 'Yes' && singleMultDF == 'Single DataFrame') {
        df_params = `datasets=<span class=\"highlightText\">df${partial ? '_2' : ''}</span>, target_datasets=<span class=\"highlightText\">y_df${partial ? '_2' : ''}</span>`;
    } else if (targetFeaturesSeparateDF === 'Yes' && singleMultDF === 'Multiple DataFrames') {
        df_params = `datasets=<span class=\"highlightText\">[df1${partial ? '_2' : ''}, df2${partial ? '_2' : ''}]</span>, target_datasets=<span class=\"highlightText\">[y_df1${partial ? '_2' : ''}, y_df2${partial ? '_2' : ''}]</span>`;
    }
    let codeSnippetText = partial ? `<span class=\"commentText\"># Add additional data to the Coreset tree.
# The Coreset tree is automatically updated to reflect the old and newly added data, 
# allowing models to be retrained quickly, to overcome model degradation.</span>\n` : '';

    if (!partial) {
        codeSnippetText += `${buildComment}        
service_obj.build_from_df(${df_params})            
`;
    }else{
  codeSnippetText += `service_obj.partial_build_from_df(${df_params})            
`;
    }
    return codeSnippetText;
}

function genBuildFromNP(singleMultNPY, partial) {
    let np_params = '';

    if (!unsupervisedAlg.includes(alg)) {
        if (singleMultNPY === 'Single numpy array') {
            np_params = `X=<span class=\"highlightText\">X${partial ? '_2' : ''}</span>, y=<span class=\"highlightText\">y${partial ? '_2' : ''}</span>`;
        } else if (singleMultNPY === 'Multiple numpy arrays') {
            np_params = `X=<span class=\"highlightText\">[X1${partial ? '_2' : ''}, X2${partial ? '_2' : ''}]</span>, y=<span class=\"highlightText\">[y1${partial ? '_2' : ''}, y2${partial ? '_2' : ''}]</span>`;
        }
    }else{
        if (singleMultNPY === 'Single numpy array') {
            np_params = `X=<span class=\"highlightText\">X${partial ? '_2' : ''}</span>`;
        } else if (singleMultNPY === 'Multiple numpy arrays') {
            np_params = `X=<span class=\"highlightText\">[X1${partial ? '_2' : ''}, X2${partial ? '_2' : ''}]</span>`;
        }
    }
    let codeSnippetText = partial ? `<span class=\"commentText\"># Add additional data to the Coreset tree.
# The Coreset tree is automatically updated to reflect the old and newly added data, 
# allowing models to be retrained quickly, to overcome model degradation.</span>\n` : '';

    if (!partial) {
        codeSnippetText += `${buildComment}        
service_obj.build(${np_params})            
`;
    }else{
  codeSnippetText += `service_obj.partial_build(${np_params})            
`;
    }

    return codeSnippetText;
}

function genBuild(
    form,
    singleMultFilesDirs,
    targetFeaturesSeparate,
    fileTypeSelect,
    targetFeaturesSeparateDF,
    singleMultDF,
    singleMultNPY,
    partial
) {
    let codeSnippetText = '';

    if (form == 'File') {
        codeSnippetText += genBuildFromFile(
            singleMultFilesDirs = singleMultFilesDirs,
            targetFeaturesSeparate = targetFeaturesSeparate,
            fileTypeSelect = fileTypeSelect,
            partial = partial);

    } else if (form == 'DF') {
        codeSnippetText += genBuildFromDF(
            targetFeaturesSeparateDF = targetFeaturesSeparateDF,
            singleMultDF = singleMultDF,
            partial = partial
        );
    } else if (form == 'NP') {
        codeSnippetText += genBuildFromNP(singleMultNPY = singleMultNPY, partial = partial);
    }
    return codeSnippetText;
}

function genCodeText(dsType,
                     useCases,
                     alg,
                     lib,
                     form,
                     fileTypeSelect,
                     targetFeaturesSeparate,
                     singleMultFilesDirs,
                     targetFeaturesSeparateDF,
                     singleMultDF,
                     singleMultNPY)
{
    const coresetTreeServiceClass = algToClass[alg]

    // useCaseProcessedComment - "train and cleaning" etc.
    // useCaseOptimizedForStr -  init optimized_for value
    let useCaseProcessed = useCases.map(el => {
        if (el === 'Model training and tuning' || el==='Model training' || el==='Model retraining' || el==='Model tuning'){
            return 'training';
        }
        if (el==='Data cleaning'){
            return 'cleaning';
        }
        if (el==='Model tuning'){
            return 'tuning';
        }
        return '';
    });
    useCaseProcessed = useCaseProcessed.flatMap(el => el==='' ? [] : [el]);
    useCaseProcessed = [...new Set(useCaseProcessed)]
    let useCaseProcessedComment = '';
    if (useCaseProcessed.length == 1){
        useCaseProcessedComment = useCaseProcessed[0];
    }else{
        useCaseProcessedComment = useCaseProcessed.slice(0, -1).join(', ') + ' and ' + useCaseProcessed[useCaseProcessed.length - 1]
    }
    let useCaseOptimizedFor = useCaseProcessed.flatMap(el => el=='tuning' ? [] : [el]);
    let useCaseOptimizedForStr = ''
    if (useCaseOptimizedFor.length == 2){
        useCaseOptimizedForStr = '["training", "cleaning"]';
    }else{
        useCaseOptimizedForStr = '"' + useCaseOptimizedFor[0] + '"';
    }
    ///////////////////
    let modelClassName = '';
    let service_init = ''
    if (form === 'File' || form ==='DF'){
        if (['Logistic Regression', 'Decision trees classification based'].includes(alg)){
            service_init = `
<span class=\"commentText\"># Define the data structure.
# In this example we have one target column, all other columns are features.
# Replace it with your own target name.</span>
data_params = {'target': {'name': '<span class=\"highlightText\">Cover_Type</span>'}}
`
        }else if (['Linear Regression', 'Decision trees regression based'].includes(alg)){
            service_init = `
<span class=\"commentText\"># Define the data structure.
# In this example we have one target column, all other columns are features.
# Replace it with your own target name.</span>
data_params = {'target': {'name': '<span class=\"highlightText\">tip_amount</span>'}}
`
        }
    }
    if (dsType == 'Tabular'){
        n_instances = '<span class=\"highlightText\">XXX</span>';//'290_000';
        n_classes = '7';
    } else if (dsType == 'NLP'){
        n_instances = '<span class=\"highlightText\">XXX</span>';//'100_000';
        n_classes = '';
    }else if (dsType == 'Computer Vision - Image Classification'){
        //ImageNet 1K
        n_instances = '<span class=\"highlightText\">XXX</span>';//'1_200_000';
        n_classes = '1_000';
    }else{
        // COCO
        n_instances = '<span class=\"highlightText\">XXX</span>';//'330_000';
        n_classes = '';
    }

    if (lib == 'XGBoost') {
        modelClassName = alg == 'Decision trees classification based' ? 'XGBClassifier': 'XGBRegressor';
        lib_import = `from xgboost import ${alg == 'Decision trees classification based' ? 'XGBClassifier': 'XGBRegressor'}

`;
        lib_param = `\n    model_cls=${alg == 'Decision trees classification based' ? 'XGBClassifier': 'XGBRegressor'},`
    }else if (lib == 'LightGBM') {
        modelClassName = alg == 'Decision trees classification based' ? 'LGBMClassifier': 'LGBMRegressor';
        lib_import = `from lightgbm import ${alg == 'Decision trees classification based' ? 'LGBMClassifier': 'LGBMRegressor'}

`;
        lib_param = `\n    model_cls=${alg == 'Decision trees classification based' ? 'LGBMClassifier': 'LGBMRegressor'},`
    }else if (lib == 'CatBoost') {
        modelClassName = alg == 'Decision trees classification based' ? 'CatBoostClassifier': 'CatBoostRegressor';

        lib_import = `from catboost import ${alg == 'Decision trees classification based' ? 'CatBoostClassifier': 'CatBoostRegressor'}

`;
        lib_param = `\n    model_cls=${alg == 'Decision trees classification based' ? 'CatBoostClassifier': 'CatBoostRegressor'},`
    }else if (lib == 'Scikit-learn' && alg.includes('Decision trees') ) {

        modelClassName = alg == 'Decision trees classification based' ? 'GradientBoostingClassifier': 'GradientBoostingRegressor';

        lib_import = `from sklearn.ensemble import ${alg == 'Decision trees classification based' ? 'GradientBoostingClassifier' : 'GradientBoostingRegressor'}

`;
        lib_param = `\n    model_cls=${alg == 'Decision trees classification based' ? 'GradientBoostingClassifier' : 'GradientBoostingRegressor'},`
    }else{
        lib_import ='';
        lib_param = '';
    }

    service_init += `    
<span class=\"commentText\"># Initialize the service for ${useCaseProcessedComment}.
# Change the number of instances ‘n_instances’ to match your dataset.</span>
${(lib_import !=='') ? lib_import:''}service_obj = ${coresetTreeServiceClass}(${((form === 'File' || form ==='DF') && (!['K-Means', 'PCA', 'SVD'].includes(alg))) ? `\n    data_params=data_params,`: ''}
    optimized_for=${useCaseOptimizedForStr},
    n_instances=<span class=\"highlightText\">${n_instances}</span>,${(lib_import !=='') ? lib_param:''}
)`

    let cleaning_processing=''

    let samplesPerClass = '';
    if (dsType === 'Computer Vision - Image Classification'){
        samplesPerClass = '{638: 100}';
    } else if (dsType === 'Computer Vision - Object Detection'){
        samplesPerClass = '{47: 100}';
    } else if (dsType === 'Computer Vision - Semantic Segmentation'){
        samplesPerClass = '{47: 100}';
    } else if (dsType === 'NLP'){
        samplesPerClass = '{4: 20}';
    }else{
        // (dsType === 'Tabular' && ['Logistic Regression', 'Decision trees classification based'].includes(alg))
        samplesPerClass = '{3: 50}';
    }

    if (dsType !== 'Tabular' ||
        (dsType === 'Tabular' && ['Logistic Regression', 'Decision trees classification based'].includes(alg))

    ) {
        cleaning_processing = `
<span class=\"commentText\"># Define the classes of interest and the number of samples 
# you want to examine per class (adjust according to your needs).
# You can use 'all' instead of a number too.
# Alternatively just pass size=100 (or any other number) to get 
# the top importance samples across all classes.</span>
samples_per_class = <span class=\"highlightText\">${samplesPerClass}</span>
result = service_obj.get_cleaning_samples(class_size=samples_per_class)
samples_to_clean, importance = result['idx'], result["importance"]

<span class=\"commentText\"># Examine the returned samples for mislabels or other anomalies.
# Use update_targets to relabel samples.
# We simulated this by calling a fix_labels function.
# Replace it with your own method to fix the incorrectly labeled samples.</span>
indices_relabeled, y_train_relabeled = <span class=\"highlightText\">fix_labels(...)</span>
service_obj.update_targets(indices=indices_relabeled, y=y_train_relabeled)

<span class=\"commentText\"># Use remove_samples to remove samples, which should not be a part of your dataset. 
# Replace indices_to_remove with the indices you wish to remove.</span>
service_obj.remove_samples(samples_to_clean[<span class=\"highlightText\">indices_to_remove</span>])
`
    }else if (['K-Means', 'PCA', 'SVD'].includes(alg)) {
        cleaning_processing = `
<span class=\"commentText\"># Define the number of top importance samples you wish to receive, 
# by adjusting the size parameter.</span>
result = service_obj.get_cleaning_samples(size=<span class=\"highlightText\">100</span>)
samples_to_clean, importance = result['idx'], result["importance"]
 
<span class=\"commentText\"># Use remove_samples to remove samples, which should not be a part of your dataset. 
# Replace indices_to_remove with the indices you wish to remove.</span>
service_obj.remove_samples(samples_to_clean[<span class=\"highlightText\">indices_to_remove</span>])        
`

    }else if (['Decision trees regression based', 'Linear Regression'].includes(alg)) {
        cleaning_processing = `
<span class=\"commentText\"># Define the number of top importance samples you wish to receive, 
# by adjusting the size parameter.</span>
result = service_obj.get_cleaning_samples(size=<span class=\"highlightText\">100</span>)
samples_to_clean, importance = result['idx'], result["importance"]
 
<span class=\"commentText\"># Examine the returned samples for incorrect targets or other anomalies.
# Use update_targets to fix samples with an incorrect target.
# We simulated this by calling a fix_targets function. 
# Replace it with your own method to fix samples’ target.</span>
indices_fixed, y_train_fixed = <span class=\"highlightText\">fix_targets(...)</span>
service_obj.update_targets(indices=indices_fixed, y=y_train_fixed)      
`
    }

let what_adjusting = '';
let metric = '';
let corset_score_expression = '';
let model_params = '';
let tuning_processing = '';

if (alg == 'Logistic Regression'){
    what_adjusting = 'max_iter or using multi_class';
    metric = 'roc_auc_score';
    corset_score_expression = `<span class=\"highlightText\">roc_auc_score</span>(y_test, service_obj.predict_proba(X_test), <span class=\"highlightText\">multi_class=\'ovr\'</span>)`;
    model_params = 'max_iter=200';

    tuning_processing = `<span class=\"commentText\"># To hyperparameter tune your model, use the library’s built-in grid_search function, 
# which would run dramatically faster than GridSearchCV on the entire dataset.
# Adjust the hyperparameters and scoring function to your needs
# (or use the default LogisticRegression scoring by setting scoring=None).</span>
param_grid = {
<span class=\"highlightText\">   'penalty' : ['l1','l2'],
   'C'       : np.logspace(-3,3,7),
   'solver'  : ['newton-cg', 'lbfgs', 'liblinear']</span>      
}

from sklearn.metrics import make_scorer${useCases.includes('Model training and tuning') ? '': `, <span class=\"highlightText\">roc_auc_score</span>`}
scoring = make_scorer(<span class=\"highlightText\">roc_auc_score</span>)

optimal_hyperparameters, trained_model = service_obj.grid_search(
    param_grid=param_grid, 
    scoring=scoring, 
    refit=True,
    verbose=2)
`

} else if (alg == 'Linear Regression'){
    what_adjusting = 'n_jobs';
    metric = 'mean_squared_error';
    corset_score_expression = `<span class=\"highlightText\">mean_squared_error</span>(y_test, service_obj.predict_proba(X_test))`;
    model_params = 'n_jobs=2';

    tuning_processing = `<span class=\"commentText\"># To hyperparameter tune your model, use the library’s built-in grid_search function, 
# which would run dramatically faster than GridSearchCV on the entire dataset.
# Adjust the hyperparameters and scoring function to your needs
# (or use the default LinearRegression scoring by setting scoring=None).</span>
param_grid = {
<span class=\"highlightText\">   'fit_intercept': [True, False], 
   'positive': [True, False]</span>      
}

from sklearn.metrics import make_scorer${useCases.includes('Model training and tuning') ? '': `, <span class=\"highlightText\">mean_squared_error</span>`}
scoring = make_scorer(<span class=\"highlightText\">mean_squared_error</span>)

optimal_hyperparameters, trained_model = service_obj.grid_search(
    param_grid=param_grid, 
    scoring=scoring, 
    refit=True,
    verbose=2)
`

} else if (alg == 'K-Means'){
    what_adjusting = 'n_clusters';
    metric = 'silhouette_score';
    corset_score_expression = `<span class=\"highlightText\">silhouette_score</span>(X_test, service_obj.predict(X_test))`;
    model_params = 'n_clusters=10';

    tuning_processing = `<span class=\"commentText\"># To hyperparameter tune your model, use the library’s built-in grid_search function, 
# which would run dramatically faster than GridSearchCV on the entire dataset.
# Adjust the hyperparameters and scoring function to your needs
# (or use the default K-Means scoring by setting scoring=None).</span>
param_grid = {
<span class=\"highlightText\">   'n_clusters': [2, 3, 5, 7],</span>      
}

<span class=\"commentText\"># The silhouette score</span>
<span class=\"highlightText\">def scoring(model, X, y=None):
${useCases.includes('Model training and tuning') ? '' : '    from sklearn.metrics import silhouette_score\n'}    clusters_labels = model.predict(X)
    return silhouette_score(X, clusters_labels)</span>

optimal_hyperparameters, trained_model = service_obj.grid_search(
    param_grid=param_grid, 
    scoring=scoring, 
    refit=True,
    verbose=2)
`

}else if (alg == 'PCA'){
    what_adjusting = 'n_components';
    metric = '';
    corset_score_expression = `<span class=\"highlightText\">np.sum(coreset_model.explained_variance_ratio_)</span>`;
    model_params = 'n_components=10';

    tuning_processing = `<span class=\"commentText\"># To hyperparameter tune your model, use the library’s built-in grid_search function, 
# which would run dramatically faster than GridSearchCV on the entire dataset.
# Adjust the hyperparameters and scoring function to your needs
# (or use the default PCA scoring by setting scoring=None).</span>
param_grid = {
<span class=\"highlightText\">   'n_components': [1, 2, 3]</span>      
}

<span class=\"commentText\"># The score is the opposite of the reconstruction error,
# evaluate based on the Frobenius norm.</span>
<span class=\"highlightText\">def scoring(model, X, y=None):
    X_transformed = model.transform(X)
    score = -np.linalg.norm(X - X_transformed.dot(model.components_) - model.mean_)
    return score</span>

optimal_hyperparameters, trained_model = service_obj.grid_search(
    param_grid=param_grid, 
    scoring=scoring, 
    refit=True,
    verbose=2)
`

}else if (alg == 'SVD'){
    what_adjusting = 'n_components';
    metric = '';
    corset_score_expression = `<span class=\"highlightText\">np.sum(coreset_model.explained_variance_)</span>`;
    model_params = 'n_components=10';

    tuning_processing = `<span class=\"commentText\"># To hyperparameter tune your model, use the library’s built-in grid_search function, 
# which would run dramatically faster than GridSearchCV on the entire dataset.
# Adjust the hyperparameters and scoring function to your needs
# (or use the default SVD scoring by setting scoring=None).</span>
param_grid = {
<span class=\"highlightText\">   'n_components': [1, 2, 3]</span>      
}

<span class=\"commentText\"># The score is the opposite of the reconstruction error,
# evaluate based on the nuclear norm.</span>
<span class=\"highlightText\">def scoring(model, X, y=None):
    return -np.linalg.norm(X - (model.predict(X)).dot(model.model), ord='nuc')</span>

optimal_hyperparameters, trained_model = service_obj.grid_search(
    param_grid=param_grid, 
    scoring=scoring,
    refit=True, 
    verbose=2)
`

}else if (alg === 'Decision trees classification based'){
    what_adjusting = 'n_estimators';
    metric = 'balanced_accuracy_score';
    corset_score_expression = '<span class=\"highlightText\">balanced_accuracy_score</span>(y_test, service_obj.predict(X_test))';
    model_params = 'n_estimators=500';
    tuning_processing = `<span class=\"commentText\"># To hyperparameter tune your model, use the library’s built-in grid_search function, 
# which would run dramatically faster than GridSearchCV on the entire dataset.
# Adjust the hyperparameters and scoring function to your needs
# (or use the default ${modelClassName} scoring by setting scoring=None).</span>
param_grid = {
<span class=\"highlightText\">   'learning_rate': [0.1, 0.01],
   'n_estimators': [250, 500, 1000],
   'max_depth': [4, 6]</span>  
}

from sklearn.metrics import make_scorer${useCases.includes('Model training and tuning') ? '': `, <span class=\"highlightText\">balanced_accuracy_score</span>`}
scoring = make_scorer(<span class=\"highlightText\">balanced_accuracy_score</span>)

optimal_hyperparameters, trained_model = service_obj.grid_search(
    param_grid=param_grid, 
    scoring=scoring, 
    refit=True,
    verbose=2
    )
`
}else if (alg === 'Decision trees regression based'){
    what_adjusting = 'n_estimators';
    //metric = 'balanced_accuracy_score';
    //corset_score_expression = '<span class=\"highlightText\">balanced_accuracy_score</span>(y_test, service_obj.predict(X_test))';
    metric = 'mean_squared_error';
    corset_score_expression = `<span class=\"highlightText\">mean_squared_error</span>(y_test, service_obj.predict_proba(X_test))`;

    model_params = 'n_estimators=500';
    tuning_processing = `<span class=\"commentText\"># To hyperparameter tune your model, use the library’s built-in grid_search function, 
# which would run dramatically faster than GridSearchCV on the entire dataset.
# Adjust the hyperparameters and scoring function to your needs
# (or use the default ${modelClassName} scoring by setting scoring=None).</span>
param_grid = {
<span class=\"highlightText\">   'learning_rate': [0.1, 0.01],
   'n_estimators': [250, 500, 1000],
   'max_depth': [4, 6]</span>  
}

from sklearn.metrics import make_scorer${useCases.includes('Model training and tuning') ? '': `, <span class=\"highlightText\">mean_squared_error</span>`}
scoring = make_scorer(<span class=\"highlightText\">mean_squared_error</span>)

optimal_hyperparameters, trained_model = service_obj.grid_search(
    param_grid=param_grid, 
    scoring=scoring, 
    refit=True,
    verbose=2
    )
`
}

let training_processing=`<span class=\"commentText\"># Fit a ${alg.replace('trees', 'tree')} model using ${lib} directly on the Coreset tree.
# Try a few levels of the Coreset tree to find the optimal one.
# Provide the same parameters to the fit, predict and predict_proba Coreset methods  
# as you would provide ${lib} (e.g.: adjusting ${what_adjusting}).</span>${metric !== '' ? `\nfrom sklearn.metrics import <span class=\"highlightText\">${metric}</span>` : ''}
for tree_level in range(3):
   coreset_model = service_obj.fit(level=tree_level, <span class=\"highlightText\">${model_params}</span>)
   coreset_score = ${corset_score_expression}
`

    let codeSnippetText = '';
    if (dsType === 'Computer Vision - Image Classification'){
        codeSnippetText += `
<span class=\"commentText\"># A prerequisite to use this Coreset is to extract the features embeddings 
# from your images. In order to do so, drop the last classification layer 
# from your pre-trained network, so the output would be the embeddings instead 
# of the class distribution.

# To see how we extracted the feature embeddings from the ImageNet dataset 
# using ResNet18 and PyTorch, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/feature_extraction_scripts/feature_extraction_imagenet1k_resnet18_pytorch.py\">link</a>.

# To see how we extracted the feature embeddings from the CIFAR10 dataset 
# using ResNet18 and TensorFlow /Keras, visit this <a target=\"_blank\" href=https://github.com/Data-Heroes/dataheroes/blob/master/examples/feature_extraction_scripts/feature_extraction_cifar10_resnet18_tensorflow_keras.py">link</a>.
</span>
`;
    } else if (dsType === 'Computer Vision - Object Detection'){
        codeSnippetText += `
<span class=\"commentText\"># A prerequisite to use this Coreset is to extract the features embeddings 
# from your images. In order to do so, drop the last classification layer 
# from your pre-trained network, so the output would be the embeddings instead 
# of the class distribution.

# To see how we extracted the feature embeddings from the COCO dataset 
# using Resnet50 and PyTorch, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/feature_extraction_scripts/feature_extraction_object_detection_coco_resnet50_pytorch.py\">link</a>.

</span>
`;
    } else if (dsType === 'Computer Vision - Semantic Segmentation'){
        codeSnippetText += `
<span class=\"commentText\"># A prerequisite to use this Coreset is to extract the features embeddings 
# from your images. In order to do so, drop the last classification layer 
# from your pre-trained network, so the output would be the embeddings instead 
# of the class distribution.

# To see how we extracted the feature embeddings from the COCO dataset 
# using Resnet50 and PyTorch, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dh-library/blob/DEV/examples/feature_extraction_scripts/feature_extraction_semantic_segmentation_coco_resnet50_pytorch.py\">link</a>.

</span>
`;
    } else if (dsType === 'NLP'){
        codeSnippetText += `
<span class=\"commentText\"># A prerequisite to use this Coreset is to extract the features embeddings 
# from your samples. In order to do so, drop the last classification layer 
# from your pre-trained network, so the output would be the embeddings instead 
# of the class distribution.

# To see how we extracted the feature embeddings from the AG News dataset 
# using PyTorch, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/feature_extraction_scripts/feature_extraction_agnews_bert_pytorch.py\">link</a>.

</span>
`;
    }
    codeSnippetText += `<span class=\"commentText\"># Text <span class=\"highlightText\">highlighted in yellow</span> should be modified to fit your needs.</span>\n`;
    codeSnippetText += `\n`;
    codeSnippetText += `from dataheroes import ${coresetTreeServiceClass} \n`;

    codeSnippetText += service_init;

    codeSnippetText += '\n'+ genBuild(
        form=form,
        singleMultFilesDirs=singleMultFilesDirs,
        targetFeaturesSeparate=targetFeaturesSeparate,
        fileTypeSelect=fileTypeSelect,
        //DF
        targetFeaturesSeparateDF=targetFeaturesSeparateDF,
        singleMultDF=singleMultDF,
        //NP
        singleMultNPY=singleMultNPY,
        partial=false
    );

    if (useCases.includes('Data cleaning')) {
        codeSnippetText += cleaning_processing;
    }

    if (useCases.includes('Model retraining')) {
        codeSnippetText += '\n'+ genBuild(
        form=form,
        singleMultFilesDirs=singleMultFilesDirs,
        targetFeaturesSeparate=targetFeaturesSeparate,
        fileTypeSelect=fileTypeSelect,
        //DF
        targetFeaturesSeparateDF=targetFeaturesSeparateDF,
        singleMultDF=singleMultDF,
        //NP
        singleMultNPY=singleMultNPY,
        partial=true
    );
    }

    if (useCases.includes('Model training')) {
        codeSnippetText += '\n'+training_processing;
    }

    if (useCases.includes('Model tuning')) {
        codeSnippetText += '\n'+tuning_processing;
    }

    if (useCases.includes('Model training and tuning')) {
        codeSnippetText += '\n'+training_processing;
        codeSnippetText += '\n'+tuning_processing;
    }





    let finalComment = ''
    if (useCases.includes('Model training and tuning')) {
        if (alg == 'Linear Regression') {
            finalComment = `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and train a linear regression model on it, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_linear_regression_tabular_data_yellowtaxi.ipynb\">link</a></span>  

`
        } else if (alg == 'Logistic Regression') {
            finalComment = `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and train a logistic regression model on it, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_logistic_regression_tabular_data_covertype.ipynb\">link</a>.</span>  

`
        } else if (alg == 'PCA') {
            finalComment = `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and train a PCA model on it, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_pca_tabular_data_higgs.ipynb\">link</a>.</span>  

`
        } else if (alg == 'K-Means') {
            finalComment = `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and train a K-Means model on it, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_kmeans_tabular_data_covertype.ipynb\">link</a>.</span>  

`
        } else if (alg == 'SVD') {
            finalComment = `<span class=\"commentText\"># A full notebook for the CoresetTreeServiceSVD isn’t available. 
# For a full notebook showing how to build a Coreset tree and train a PCA model on it, 
# visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_pca_tabular_data_higgs.ipynb\">link</a>.</span>  

`
        } else if (lib == 'LightGBM') {
            finalComment = `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and train a LightGBM model on it, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_lightGBM_tabular_data_pokerhand.ipynb\">link</a>.</span>  

`
        } else if (lib == 'XGBoost') {
            finalComment = `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and train a XGBoost model on it, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_xgboost_tabular_data_pokerhand.ipynb\">link</a>.</span>  

`
        } else if (lib == 'CatBoost') {
            finalComment = `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree and train a CatBoost model on it, visit this <a target=\"_blank\" href="https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_Catboost_tabular_data_pokerhand.ipynb">link</a>.</span>  
`
        } else if (alg == 'Decision trees classification based' && lib == 'Scikit-learn') {
            finalComment = `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and train a GradientBoosting model on it, visit this <a target=\"_blank\" href="https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_gradientBoosting_tabular_data_pokerhand.ipynb">link</a>.</span>  

`
        } else if (alg == 'Decision trees regression based' && lib == 'Scikit-learn') {
            finalComment = `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and train a GradientBoosting model on it, visit this <a target=\"_blank\" href="https://github.com/Data-Heroes/dataheroes/blob/master/examples/build_and_train/build_and_train_gradientBoosting_tabular_data_pokerhand.ipynb">link</a>.</span>  

`
        }

        finalComment += `<span class=\"commentText\"># A full notebook showing how to build a Coreset tree and hyperparameter 
# tune your model on it, is available only for XGBoost in this <a target="_blank" href="https://github.com/Data-Heroes/dataheroes/blob/master/examples/hyperparameters_optimization/grid_search_hyperparameters_tuning.ipynb">link</a>.

`
    }

    if (useCases.includes('Data cleaning')){
        if (alg =='Decision trees classification based' || alg == 'Logistic Regression'){
            finalComment += `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and use it to clean your data in classification tasks, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/cleaning/data_cleaning_coreset_vs_random_tabular_credit_card.ipynb\">link</a>.</span>
`
        } else if (alg =='Decision trees regression based' || alg == 'Linear Regression'){
            finalComment += `<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree 
# and use it to clean your data in regression tasks, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/cleaning/data_cleaning_coreset_vs_random_tabular_california_housing.ipynb\">link</a>.</span>
`       }else{
            finalComment += `<span class=\"commentText\"># A full notebook showing how to clean your data 
# using the ${coresetTreeServiceClass}, isn’t available.
# For a full notebook showing how to build a Coreset tree and use it 
# to clean your data in regression tasks, visit this <a target=\"_blank\" href=\"https://github.com/Data-Heroes/dataheroes/blob/master/examples/cleaning/data_cleaning_coreset_vs_random_tabular_california_housing.ipynb\">link</a>.</span>
`        }
    } 

    codeSnippetText += '\n'+finalComment;

    if (dsType === 'Computer Vision - Image Classification'){
        codeSnippetText += '\n'+`<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree for cleaning purposes 
# for the ImageNet dataset, visit this <a target="_blank" href="https://github.com/Data-Heroes/dataheroes/blob/master/examples/cleaning/data_cleaning_image_classification_imagenet.ipynb">link</a>.

# For a full notebook showing how to build a Coreset tree for cleaning purposes 
# comparing cleaning using the DataHeroes library to random cleaning 
# for the CIFAR10 dataset, visit this <a target="_blank" href=https://github.com/Data-Heroes/dataheroes/blob/master/examples/cleaning/data_cleaning_coreset_vs_random_image_classification_cifar10.ipynb">link</a>.</span>    
`
    }else if (dsType === 'Computer Vision - Object Detection'){
        codeSnippetText += '\n'+`<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree for cleaning purposes 
# for the COCO dataset, visit this <a target="_blank" href="https://github.com/Data-Heroes/dataheroes/blob/master/examples/cleaning/data_cleaning_object_detection_coco.ipynb">link</a>.
`
    }else if (dsType === 'Computer Vision - Semantic Segmentation'){
        codeSnippetText += '\n'+`<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree for cleaning purposes 
# for the COCO dataset, visit this <a target="_blank" href="https://github.com/Data-Heroes/dataheroes/blob/master/examples/cleaning/data_cleaning_semantic_segmentation_coco.ipynb">link</a>.
`
    }else if (dsType === 'NLP'){
        codeSnippetText += '\n'+`<span class=\"commentText\"># For a full notebook showing how to build a Coreset tree for cleaning purposes 
# for the AG News dataset, visit this <a target="_blank" href="https://github.com/Data-Heroes/dataheroes/blob/master/examples/cleaning/data_cleaning_nlp_classification_agnews.ipynb">link</a>.
`
    }

    return codeSnippetText;
}

