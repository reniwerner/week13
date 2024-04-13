$(document).ready(function() {
    $('#addNoteBtn').on('click', function() {
        const noteText = $('#noteInput').val().trim();
        if (noteText !== '') {
            const note = $('<div class="note">' + noteText + '</div>');
            $('#notesList').append(note);
            $('#noteInput').val('');
        }
    });

    $('#deleteNoteBtn').on('click', function() {
        $('#notesList .note').last().remove();
    });

    $('#restoreNoteBtn').on('click', function() {
        $('#notesList .note.temporarily-deleted').removeClass('temporarily-deleted');
    });

    $('#markImportantBtn').on('click', function() {
        const note = $('#notesList .note').last();
        note.toggleClass('important');
    });
});